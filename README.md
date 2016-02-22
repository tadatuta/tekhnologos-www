# tekhnologos.com

## Анатомия
Два типа бандлов:
`index` — кастомная главная страница, строится по index.bemjson.js.
`hotel` — бандл, на основании шаблонов которого генерируются все остальные
страницы модели `content/model.js`.

## Сборка
```
npm i
npm run make
```

## Разработка
```
npm start &
npm run watch
```
http://localhost:8080/output/
