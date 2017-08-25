import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {ParamService} from './service/param.service';
import {SimpleService} from './service/simple.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    //不需要参数 则直接注入
    SimpleService,
    {
      // 需要参数 则使用useFactory注入
      provide: ParamService,
      useFactory: (): ParamService => new ParamService('麦子')
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
