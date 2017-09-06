
# 根据 生产/开发 环境返回不一样的URL

NO1、声明常量，会被用作API_URL依赖的令牌。也就是说angular会根据APIURL来存储返回的URL。
NO2、这样当我们使用： `constructor( @Inject(API_URL) private apiUrl: string) { }` 时就会把API_URL的值注入到apiUrl中去。
NO3、同时我们也导出API_URL常量方便在其他地方使用。 `export const API_URL: string = 'API_URL';`
NO4、创建组件调用服务，并且根据运行环境返回不同的值。
`{
  provide: API_URL,
  useValue: environment.production ? 'https://production-api.sample.com' : 'http://dev-api.sample.com'
}`
NO5、在`/environments/environment.prod`中配置环境参数



# 其他信息如下：

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.28.3.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
