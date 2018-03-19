# Property-Information-Display

> A Vue.js project that displays property information from House Canary's API.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Details

1. Based on Vuetify's [Getting Started project](https://github.com/vuetifyjs/webpack-simple). 
2. Added HTTP client (powered by [Axios](https://www.npmjs.com/package/axios)) to fetch real estate data from [House Canary's API](https://www.housecanary.com/real-estate-data-api) (see /src/services/HouseCanaryService.js).
3. Displayed fetched data with [Bootstrap + Vue](https://bootstrap-vue.js.org/) (see /src/components/HelloWorld.vue).

## Output

To see the output, visit [this](https://adoring-mayer-431c58.netlify.com) (powerd by [Netlify](https://www.netlify.com/)).