import { NgModule } from '@angular/core';
import { HomeComponent } from './homeprincipal.component';
import { CommonModule } from '@angular/common';

@NgModule({

    declarations: [
        HomeComponent

    ],

    imports: [
        CommonModule

    ],

    exports: [
        HomeComponent
    ],
})
export class HomePrincipalModule { }