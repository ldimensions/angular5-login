import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";
import { LoginComponent } from "./BackEnd/Components/Login/login.component";
import { DashBoardComponent } from "./BackEnd/Components/Dashboard/dash-board.component";
import { HeaderComponent } from "./BackEnd/Components/Header/header.component";
import { FooterComponent } from "./BackEnd/Components/Footer/footer.component";
import { AuthGuard } from "./BackEnd/Guards/auth.guard";
import { ProfileComponent } from "./BackEnd/Components/Profile/profile.component";

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LoginComponent },
  { path: 'dashboard', children:
    [
      //{ path: '', component: HeaderComponent, outlet: 'adminHeader'},      
      { path: '', component: DashBoardComponent, canActivate: [AuthGuard]},
      //{ path: '', component: FooterComponent, outlet: 'adminFooter'}
    ]
  },  
  { path: 'profile', children:
    [
      { path: '', component: HeaderComponent, outlet: 'adminHeader'},      
      { path: '', component: ProfileComponent, canActivate: [AuthGuard]},
      { path: '', component: FooterComponent, outlet: 'adminFooter'}
    ]
  },  
  { path: '**', redirectTo: '' }, 

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
