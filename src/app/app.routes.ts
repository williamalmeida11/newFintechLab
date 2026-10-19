import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ClienteFormComponent } from './pages/cliente-form/cliente-form.component';
import { AdminClientesComponent } from './pages/admin/admin-clientes/admin-clientes.component';

export const routes: Routes = [
    { path: 'sobre', component: SobreComponent},
    { path: '', component: HomeComponent},
    { path: 'login', component: LoginComponent },
    { path: 'cliente-cadastro', component: ClienteFormComponent},
    { path: 'Admin', component: AdminClientesComponent},
    
];