import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { homeRouting } from './home.routing';
import { HeaderModule } from '../header/header.module';
import { SideMenuModule } from '../side-menu/side-menu.module';

@NgModule({
  imports: [
    CommonModule,
    homeRouting,
    HeaderModule,
    SideMenuModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
