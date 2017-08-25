
// NO1 导入ReflectiveInjector
import { Component, ReflectiveInjector } from '@angular/core';
// NO2 导入MyService
import {MyService} from './service/name.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // NO3声明实例
  myService: MyService;

  constructor() {
    // NO4 使用ReflectiveInjector 创建新的injector
    let injector: any = ReflectiveInjector.resolveAndCreate([MyService]);
    // NO5获取新的实例
    this.myService = injector.get(MyService);
    console.log(this.myService.getValue());
  }

  title = '使用ReflectiveInjector注入器注入服务';
  content='控制台输出 wangming 即注入成功！！ 不需要在src/app/app.module.ts添加任何依赖！！';
}
