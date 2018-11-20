import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDesignRoutingModule } from './material-design-routing.module';
import { MaterialDesignComponent } from './material-design.component';


import { CustomMaterialModule } from '../shared/material';


@NgModule({
    imports: [CommonModule, MaterialDesignRoutingModule,CustomMaterialModule],
    declarations: [MaterialDesignComponent]
})  

export class MaterialDesignModule { }