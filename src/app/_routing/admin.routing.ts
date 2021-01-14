import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddForumComponent } from '../_components/admin/forum/add-forum/add-forum.component';
import { AdminPanelComponent } from '../_components/admin/panel/panel.component';

const routes: Routes = [{
    path: '',
    component:AdminPanelComponent ,
    children: [
      {
        path: 'forum',
        component: AddForumComponent,
        children: [{
            path: '',
            component: AddForumComponent,
            outlet: 'admin'
          }],
          },
        ],
      },
    ];