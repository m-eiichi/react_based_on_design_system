<details><summary>初回導入</summary>

### I. Docker環境を準備

1. [newwebsystem_env](https://svr01git.dicjapan.local/laboratory/newsystem/newwebsystem_env)の環境を構築

### II. 開発コンテナを開く

@VSCode.コマンドパレット

1. F1を押して以下の項目を選択

```
Dev Containers: Open Folder in Container...
```

2. 以下まで行ってOKボタン

```
~/docker/newwebsystem_env/react/
```

(最初からあるindex.htmlは不要のでを削除)

### III. gitクローン

1. Dir移動

```
cd /usr/src/app/react_vite_project
```

2. ここのリポジトリをgit cloneする  
   [clone方法はこちら](https://svr01git.dicjapan.local/other/gitclonecommandgen)

### IV. ライブラリ解決

```
yarn
```

</details>

## 開発時コマンド

### 開発コンテナのターミナルで、適宜実行

| 操作            | コマンド         | 備考                     |
| --------------- | ---------------- | ------------------------ |
| 作業Dir         | `cd react-vite`  |                          |
| Webサービス起動 | `yarn dev`       | `http://localhost:5173/` |
| UIカタログ起動  | `yarn storybook` | `http://localhost:6006/` |
| ビルド          | `yarn build`     |                          |
