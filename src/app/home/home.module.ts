import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { homeRouting } from './home.routing';
import { HeaderModule } from '../header/header.module';

@NgModule({
  imports: [
    CommonModule,
    homeRouting,
    HeaderModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
