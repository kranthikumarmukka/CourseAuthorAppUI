import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorpageComponent } from './authorpage.component';
import { AuthorlistComponent } from './authorlist.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AuthorpageComponent, AuthorlistComponent]
})
export class AuthorModule { }
