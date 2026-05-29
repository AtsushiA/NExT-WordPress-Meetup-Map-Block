# NExT WordPress Meetup Map Block

WordPress ミートアップマップをブロックエディタに埋め込むための Gutenberg ブロックプラグインです。

## 概要

[wp-meetup-map](https://wp-meetup-map.netlify.app/) が提供する WordPress コミュニティのミートアップマップを、ブロックエディタから簡単に投稿・固定ページへ埋め込むことができます。国の絞り込みや表示高さの変更をエディタ上でリアルタイムにプレビューしながら設定できます。

## 機能

- 国別フィルタリング（ISO 3166-1 alpha-2 コードに対応した 40 カ国以上）
- コンボボックスで国名を検索・選択
- マップの表示高さを 200px〜1000px の範囲でスライダー調整
- ブロックエディタ内でのフルプレビュー
- ワイド・フル幅アラインメント対応
- マージン・パディングの spacing サポート

## 動作要件

| 項目 | バージョン |
|------|-----------|
| WordPress | 6.1 以上 |
| PHP | 7.0 以上 |
| Node.js | ビルド時のみ（`@wordpress/scripts` が要求するバージョン） |

## インストール

### ZIP からインストール

1. [Releases](../../releases) から最新の ZIP をダウンロードします。
2. WordPress 管理画面の **プラグイン › 新規追加 › プラグインのアップロード** から ZIP をインストールします。
3. プラグインを有効化します。

### 手動インストール

```bash
cd /path/to/wp-content/plugins/
git clone <repository-url> next-meetup-map-block
cd next-meetup-map-block
npm install
npm run build
```

WordPress 管理画面でプラグインを有効化します。

## 使い方

1. ブロックエディタを開き、ブロック追加メニューで **「Meetup Map Block」** を検索します。
2. ブロックを挿入するとデフォルトで日本（JP）のマップが表示されます。
3. 右サイドバーの **「Map Settings」** パネルで設定を変更します。

| 設定項目 | 説明 | デフォルト |
|---------|------|-----------|
| Country | 表示する国（コンボボックスで検索可） | `JP`（日本） |
| Map Height (px) | iframe の表示高さ | `500` px |

## 開発

### ビルド

```bash
npm install
npm run build   # 本番ビルド
npm run start   # 開発モード（ウォッチ）
```

### コード品質

```bash
npm run lint:js    # JavaScript lint
npm run lint:css   # CSS lint
npm run format     # コードフォーマット
```

### プラグイン ZIP 作成

```bash
npm run plugin-zip
```

### ディレクトリ構成

```
next-meetup-map-block/
├── build/              # ビルド成果物（コミット不要）
├── src/
│   ├── block.json      # ブロックメタデータ
│   ├── edit.js         # エディタ側コンポーネント
│   ├── save.js         # 保存コンポーネント（動的ブロックのため null を返す）
│   ├── render.php      # フロントエンド描画
│   ├── view.js         # フロントエンドスクリプト
│   ├── editor.scss     # エディタ用スタイル
│   └── style.scss      # フロントエンド共通スタイル
├── .gitignore
├── next-meetup-map-block.php   # プラグインエントリーポイント
├── package.json
└── readme.txt          # WordPress プラグインディレクトリ用
```

## 仕組み

マップは `https://wp-meetup-map.netlify.app/?country={CC}` を `<iframe>` で読み込む動的ブロックです。`country` パラメータに ISO 3166-1 alpha-2 の国コードを渡すことで、アプリ側の localStorage よりも優先してフィルタリングが適用されます。

## 変更履歴

### 0.1.1

- マップの埋め込み URL を `developer.wordpress.org/meetup-map/` から `wp-meetup-map.netlify.app` に変更
  - 上流プロジェクト ([torounit/wp-meetup-map#46](https://github.com/torounit/wp-meetup-map/pull/46)) が Create React App → Vite + Netlify に移行し、旧 URL が 404 になったため
- `.gitignore` を追加

### 0.1.0

- 初回リリース（国別プリセット・カスタム座標・ズームレベル・高さ調整）

## ライセンス

[GPLv2 or later](https://www.gnu.org/licenses/gpl-2.0.html)
