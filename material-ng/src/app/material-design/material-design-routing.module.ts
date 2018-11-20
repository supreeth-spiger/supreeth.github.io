import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialDesignComponent } from './material-design.component';

const routes : Routes = [
    {
        path : "",
        component : MaterialDesignComponent
    }
]

@NgModule ({    

    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]

})

export class MaterialDesignRoutingModule{}