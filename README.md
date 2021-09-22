# PnP 웹사이트

## 설치

1. git을 사용해서 다운로드합니다.

```bash
git clone https://github.com/k4sud0n/pnp-website.git
```

## 실행

1. npm이나 yarn을 사용해서 필수 모듈들을 설치합니다.

```bash
yarn ## or npm install
```

2. npm이나 yarn을 사용해서 실행합니다.

```bash
yarn start ## or npm start
```

## 배포

```gh-pages``` 모듈을 사용해서 배포합니다.

1. npm이나 yarn을 사용해서 `gh-pages` 모듈을 설치합니다.

```
yarn add gh-pages ## or npm install gh-pages
```

2. ```package.json```파일에서 homepage를 수정합니다.

```
"homepage": "https://{깃허브아이디}.github.io/{리포지토리명}/"
```

3. npm이나 yarn을 사용해서 build 명령어를 실행시킵니다.

```
yarn build ## or npm run build
```