## picgo-plugin-vscode-migrator

<a href="https://www.npmjs.com/package/picgo-plugin-vscode-migrator"><img src="https://img.shields.io/npm/v/picgo-plugin-vscode-migrator.svg?style=flat-square" alt="npm"></a>
<a href="https://standardjs.com"><img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square" alt="JavaScript Style Guide"></a>
<a href="https://travis-ci.com/upupming/picgo-plugin-vscode-migrator/builds"><img src="https://img.shields.io/travis/com/upupming/picgo-plugin-vscode-migrator.svg?style=popout-square" alt="travis build status"></a>
<a href="https://github.com/upupming/picgo-plugin-vscode-migrator/blob/master/LICENSE"><img src="https://img.shields.io/github/license/mashape/apistatus.svg?style=popout-square" alt="License"></a>

Import images from `vs-picgo` to PicGo.

## Step 1: upload images using [`vs-picgo`](https://github.com/Spades-S/vs-picgo/)

<img src=https://i.loli.net/2019/04/02/5ca25272d0e84.gif height=400>

## Step 2: import images from `vs-picgo`

Before importing:

<img src=https://i.loli.net/2019/04/02/5ca252a4d1eb6.png height=300>

`C:\Users\Doraeming\vs-picgo-log.json`(`vs-picgo` log path for Windows):

```json
{
  "smms": [
    {
      "fileName": "vs-picgo-demo.gif",
      "width": 1030,
      "height": 776,
      "extname": ".gif",
      "imgUrl": "https://i.loli.net/2019/04/02/5ca253456c4bd.gif",
      "type": "smms",
      "id": "f37b4678-ea3b-402d-be64-7fd011cc32a8"
    }
  ]
}
```

Now run `picgo-plugin-vscode-migrator` to import:

<img src=https://i.loli.net/2019/04/02/5ca2565f51930.gif height=300>

After imported:

`C:\Users\Doraeming\vs-picgo-log.json`:

```json
{}
```