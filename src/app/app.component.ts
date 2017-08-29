import { Component, Inject, } from '@angular/core';
import {ApiService}from './service/api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// NO1 在部件的构造函数中声明要使用的对象
// export class AppComponent {
//   title = '在部件的构造函数中声明要使用的对象';
//   constructor(private apiService: ApiService) {
//     this.apiService.get();
//   }
// }

//NO2 使用@Inject注解!

export class AppComponent {
  title = '使用NG2注解!';
  private apiService: ApiService;
  constructor( @Inject(ApiService) apiService) {
    this.apiService = apiService;
    this.apiService.get();
  }
}
