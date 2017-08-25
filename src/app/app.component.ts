import { Component } from '@angular/core';

//N03导入  MyService
import {MyService} from './service/name.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = '使用NgModule提供依赖';
  content = '输出wangming即为成功注入！注意：providers: [MyService], 与 providers: [{ provide: MyService, useClass: MyService }]  等价!!';

  //N04 将 MyService 注入构造函数
  constructor(private myService: MyService) {
    //N05使用它的实例
    console.log(myService.getValue())
  }
}
