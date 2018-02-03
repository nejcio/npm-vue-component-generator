## Vue generator
1.Install

`
npm install git+ssh://git@github.com:wrcx/npm-vue-component-generator.git --save
`

2.Create generator.config.json

```
{
  "folder": "resources/assets/js/"
}

```

3.Add command to package.json
```
"custom": "cd ./node_modules/npm-vue-generator/ && npm run generator",
```