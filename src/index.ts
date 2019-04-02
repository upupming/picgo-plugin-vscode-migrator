import picgo from 'picgo'
// import { Notification } from 'electron'
import { readFileSync, writeFileSync } from 'fs'
import os from 'os'
import path from 'path'

const vsLogPath = path.resolve(os.homedir(), 'vs-picgo-log.json')

function showNotification (guiApi, text: string) {
  guiApi.showNotification({
    title: 'vscode-migrator',
    body: text
  })
  // const notification = new Notification({
  //   title: 'vscode-migrator',
  //   body: text
  // })
  // notification.show()
}

function syntaxError (guiApi) {
  showNotification(guiApi, `The vs-picgo log file ${vsLogPath} has syntax error, ` +
  `please fix the error by yourself`)
}
function fileNotExists (guiApi) {
  showNotification(guiApi, `The vs-picgo log file ${vsLogPath} doesn't exists`)
}

function getPicgoImagesJson (ctx: picgo, guiApi) {
  try {
    const picgoConfigPath = path.resolve(ctx.baseDir, 'data.json')
    let data = JSON.parse(readFileSync(picgoConfigPath, 'utf8'))
    return data.uploaded
  } catch (err) {
    showNotification(guiApi, 'Read PicGo config failed')
    console.error(err)
  }
}

function writePicgoImagesJson (ctx: picgo, guiApi, uploaded) {
  try {
    const picgoConfigPath = path.resolve(ctx.baseDir, 'data.json')
    let data = JSON.parse(readFileSync(picgoConfigPath, 'utf8'))
    data.uploaded = uploaded
    writeFileSync(picgoConfigPath, JSON.stringify(data, null, 2), 'utf8')
  } catch (err) {
    showNotification(guiApi, 'Write PicGo config failed')
    console.error(err)
  }
}

function reCreateVsLogFile () {
  writeFileSync(vsLogPath, JSON.stringify({}))
}

const migrateFromVsPicgo = {
  label: 'Import images from vs-picgo',
  async handle (ctx: picgo, guiApi) {
    try {
      showNotification(guiApi, 'Started importing images from vs-picgo')
      let data = readFileSync(vsLogPath, 'utf8')
      let log = JSON.parse(data)
      let picgoUploaded = getPicgoImagesJson(ctx, guiApi)
      let imagesImported = 0
      // Now `picBed` will be only `uploaded`, future changes may be adopted
      Object.keys(log).forEach(picBed => {
        picgoUploaded = picgoUploaded.concat(log[picBed])
        imagesImported += log[picBed].length
      })
      writePicgoImagesJson(ctx, guiApi, picgoUploaded)
      reCreateVsLogFile()
      showNotification(guiApi, `Successfully imported ${imagesImported} images from vs-picgo`)
    } catch (err) {
      if (err.message.includes('ENOENT: no such file or directory')) {
        fileNotExists(guiApi)
      } else if (err instanceof SyntaxError) {
        syntaxError(guiApi)
      } else {
        showNotification(
          guiApi,
          `Error happened when importing: ${err || ''}`
        )
        console.error(err)
      }
    }
  }
}

const guiMenu = ctx => {
  return [migrateFromVsPicgo]
}

module.exports = (ctx) => {
  const register = () => { }
  return {
    register,
    guiMenu
  }
}
