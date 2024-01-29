import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '**',
        redirectTo: '',
    }
]

@NgModule({

    declarations: [

    ],

    imports: [
        RouterModule.forChild(routes)

    ],
    exports: [

        RouterModule
    ]

})
export class HomePrincipalModule { }