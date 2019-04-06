## picgo-plugin-vscode-migrator

<a href="https://www.npmjs.com/package/picgo-plugin-vscode-migrator"><img src="https://img.shields.io/npm/v/picgo-plugin-vscode-migrator.svg?style=flat-square" alt="npm"></a>
<a href="https://standardjs.com"><img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square" alt="JavaScript Style Guide"></a>
<a href="https://travis-ci.com/upupming/picgo-plugin-vscode-migrator/builds"><img src="https://img.shields.io/travis/com/upupming/picgo-plugin-vscode-migrator.svg?style=popout-square" alt="travis build status"></a>
<a href="https://github.com/upupming/picgo-plugin-vscode-migrator/blob/master/LICENSE"><img src="https://img.shields.io/github/license/mashape/apistatus.svg?style=popout-square" alt="License"></a>

Import images from `vs-picgo` to PicGo.

## Step 1: upload images using [`vs-picgo`](https://github.com/Spades-S/vs-picgo/)

<details>
<img src=https://i.loli.net/2019/04/02/5ca25272d0e84.gif height=400>
</details>

## Step 2: import images from `vs-picgo`

<details>
<summary>Before importing</summary>

<img src=https://i.loli.net/2019/04/02/5ca252a4d1eb6.png height=300>

`C:\Users\Doraeming\vs-picgo-log.json`(`vs-picgo` log path for Windows):

```json
{
  "uploaded": [
    {
      "fileName": "20190402103137.png",
      "width": 405,
      "height": 289,
      "extname": ".png",
      "imgUrl": "https://i.loli.net/2019/04/02/5ca2c98c583c0.png",
      "type": "smms",
      "id": "1ce5929e-31a7-4b72-b32b-eaf1eb2e06c3"
    }
  ]
}
```

</details>

Now run `picgo-plugin-vscode-migrator` to import:

<img src=https://i.loli.net/2019/04/02/5ca2565f51930.gif height=300>

<details>
<summary>After imported</summary>

`C:\Users\Doraeming\vs-picgo-log.json`:

```json
{}
```