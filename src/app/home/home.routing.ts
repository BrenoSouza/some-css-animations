import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ModuleWithProviders } from '@angular/core';


const homeRoutes: Routes = [
    { path: '', component: HomeComponent, children: [
            { path: '', redirectTo: '', pathMatch: 'prefix' },
        ]
    }
];
export const homeRouting: ModuleWithProviders = RouterModule.forChild(homeRoutes);
