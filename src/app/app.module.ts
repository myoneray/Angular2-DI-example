import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';


//导入依赖令牌
import { ApiService, API_URL} from './services/api.service';
// 生产
// import {environment}  from '../environments/environment.prod';
// 开发
import {environment}  from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ApiService,
    {
      provide: API_URL,
      // 依据环境参数返回不同的URL存放在API_URL
      useValue: environment.production ? 'https://production-api.sample.com' : 'http://dev-api.sample.com'
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
