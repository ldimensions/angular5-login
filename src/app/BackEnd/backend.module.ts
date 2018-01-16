import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HeaderComponent } from "./Components/Header/header.component";
import { LoginComponent } from "./Components/Login/login.component";
import { DashBoardComponent } from "./Components/Dashboard/dash-board.component";
import { LoginService } from "./Services/login.service";
import { FooterComponent } from "./Components/Footer/footer.component";
import { AuthGuard } from "./Guards/auth.guard";
import { AuthService } from "./Services/auth.service";
import { ProfileComponent } from "./Components/Profile/profile.component";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,   
        HttpModule     
    ],
    exports: [],
    declarations: [
        LoginComponent,
        HeaderComponent,        
        DashBoardComponent,
        ProfileComponent,
        FooterComponent,        
    ],
    providers: [
        LoginService,
        AuthGuard,
        AuthService
    ],
})
export class BackendModule { }
