import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatIconModule} from '@angular/material/icon'
import { MatToolbarModule } from "@angular/material/toolbar";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog'
import {MatCardModule} from '@angular/material/card';
import {MatBadgeModule} from '@angular/material/badge';
import {MatCheckboxModule} from '@angular/material/checkbox';

export const material = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatTableModule,
  MatTooltipModule,
  MatSelectModule,
  MatPaginatorModule,
  MatDialogModule,
  MatCardModule,
  MatBadgeModule,
  MatCheckboxModule
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    material
  ],
  exports:[material]
})
export class MaterialModule { }
