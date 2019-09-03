import { ModuleWithProviders } from '@angular/core';
import { Router, RouterModule, Route, Routes } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
// import { appRoutingProviders, routing } from '../../../Angular/aprendiendoAngular/src/app/app.routing';
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';
import { LoginComponent } from './components/login/login.component';

const appRoutes: Routes = [
  { path: '', component: AboutComponent},
  { path: 'sobre-mi', component: AboutComponent},
  { path: 'proyectos', component: ProjectsComponent},
  { path: 'crear-proyecto', component: CreateComponent},
  { path: 'contacto', component: ContactComponent},
  { path: 'proyecto/:id', component: DetailComponent},
  { path: 'editar-proyecto/:id', component: EditComponent},
  { path: 'login', component: LoginComponent},
  { path: '**', component: ErrorComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
