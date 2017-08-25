import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

//N01 导入MyService
import { MyService} from './service/name.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  //N02 MyService添加进依赖中去
  // providers: [MyService],
  providers: [{ provide: MyService, useClass: MyService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
