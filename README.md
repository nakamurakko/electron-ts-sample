# electron-ts-sample

A sample of running Electron with TypeScript.

下記サイトを参考に Electron を TypeScript で実装、デバッグするサンプルを作成した。

* [electron-quick-start-typescript](https://github.com/electron/electron-quick-start-typescript)
* [electron-typescript-vscode](https://github.com/abartho/electron-typescript-vscode)

## デバッグ手準備

1. パッケージをインストールする。
    ```bat
    npm install
    ```
1. デバッグビルドを実行する。
    ```bat
    npm run build
    ```
1. デバッグ構成 `Debug All` を選択してデバッグを開始する。

## EXE 作成手順

1. EXE ビルドを実行する。
    ```bat
    npm run build-portable
    ```
