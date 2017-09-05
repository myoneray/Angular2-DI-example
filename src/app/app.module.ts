import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ApiService}from './service/api.service';
import { ViewService}from './service/view.service';

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
    ApiService,
    ViewService,
    { provide: 'ApiServiceAlias', useExisting: ApiService },
    {
      provide: 'SizeService', useFactory: (viewService: any) => {
        return viewService.change();
      }, deps: [ViewService]
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
