import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: "material-design",
        loadChildren: './material-design/material-design.module#MaterialDesignModule'
    },

    {
        pathMatch: 'full',
        path: '',
        redirectTo: "material-design"
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }