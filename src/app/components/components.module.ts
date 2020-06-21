import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ModalsComponent } from './modals/modals.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { FormGroup,FormsModule, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { TeacherRegistrationComponent } from './teacher-registration/teacher-registration.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [NavbarComponent, ModalsComponent, StudentComponent, TeacherComponent, StudentRegistrationComponent, TeacherRegistrationComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatRippleModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  exports: [
    NavbarComponent,
    ModalsComponent,
    MatDialogModule,
    MatRippleModule
  ]
})

export class ComponentsModule { }
