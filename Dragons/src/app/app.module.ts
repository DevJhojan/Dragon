import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { ListDragonsComponent } from './Components/list-dragons/list-dragons.component';
import { DetailDragonComponent } from './Components/detail-dragon/detail-dragon.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListDragonsComponent,
    DetailDragonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
