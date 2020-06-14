import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Link1Component } from './link1/link1.component';
import { Link3Component } from './link3/link3.component';
import { Link4Component } from './link4/link4.component';
import { Link2Component } from './link2/link2.component';
import { Sublink1Component } from './sublink1/sublink1.component';
import { Sublink2Component } from './sublink2/sublink2.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
},{
  path: 'link1',
  component: Link1Component,
  children: [{
    path: 'sublink1',
    component: Sublink1Component
  }, {
    path: 'sublink2',
    component: Sublink2Component
  }]
},{
  path: 'link2',
  component: Link2Component
},{
  path: 'link3',
  component: Link3Component
},{
  path: 'link4',
  component: Link4Component
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
