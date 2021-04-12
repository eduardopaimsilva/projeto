import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SobreComponent } from './sobre/sobre.component';
import { StartupComponent } from './startup/startup.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InvestidorComponent } from './investidor/investidor.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'investidor', component: InvestidorComponent},
    {path: 'startup', component: StartupComponent},
    {path: 'sobre', component: SobreComponent},
    {path:'login', component: LoginComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
