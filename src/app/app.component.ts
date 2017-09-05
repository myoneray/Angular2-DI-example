import { Component, Inject, ReflectiveInjector} from '@angular/core';
import { ApiService}from './service/api.service';
import { ViewService}from './service/view.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = "2service";
  constructor(
    private apiService: ApiService,
    @Inject('ApiServiceAlias') private aliasService: ApiService,
    @Inject('SizeService') private sizeService: any) {
  }

  // 固定获取service
  invokeApi(): void {
    this.apiService.get();
    this.aliasService.get();
    this.sizeService.run();
  }

  // 实时动态获取新的service
  useInjectors(): void {
    // 创建新的注入器
    let injector: any = ReflectiveInjector.resolveAndCreate([
      ViewService,
      {
        provide: 'OtherSizeService',
        useFactory: (viewport: any) => {
          return viewport.change();
        },
        deps: [ViewService]
      }
    ]);
    // 获取 OtherSizeService实例
    let sizeService: any = injector.get('OtherSizeService');
    sizeService.run();
  }


}
