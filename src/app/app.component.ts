import { Component } from '@angular/core';
import {ParamService} from './service/param.service';
import {SimpleService} from './service/simple.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '使用工厂注入!';
  content = '注意：控制台输出内容为 service的构造方法中打印的。';

  // 调用服务产生实例
  constructor(private simpleService: SimpleService, private paramService: ParamService) {

  }
}
