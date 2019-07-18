import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material/material.module";
import { LoginComponent } from "./pages/login/login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HomeComponent } from "./pages/home/home.component";
import { RegisterComponent } from "./pages/register/register.component";
import { ForgotComponent } from "./pages/forgot/forgot.component";
import { HttpClientModule } from "@angular/common/http";
import { NgxSpinnerModule } from "ngx-spinner";
import { HeaderToolbarComponent } from "./components/header-toolbar/header-toolbar.component";
import { environment } from "src/environments/environment";
import { AuthModule } from "ng6-md-auth";
import { AdmissionComponent } from "./pages/admission/admission.component";
import { AdddatastudentComponent } from "./pages/adddatastudent/adddatastudent.component";
import { ChoosefilemultipleComponent } from "./pages/choosefilemultiple/choosefilemultiple.component";

import { MatDialogModule } from "@angular/material/dialog";
import { MatStepperModule } from "@angular/material/stepper";
import { AddstudentstepperComponent } from "./pages/addstudentstepper/addstudentstepper.component";
import {ScrollDispatchModule} from '@angular/cdk/scrolling'

import { MatMenuModule } from "@angular/material/menu";
import { MatTableModule } from "@angular/material/table";
import { MatSelectModule } from "@angular/material/select";
import { CheckdetailComponent } from './pages/checkdetail/checkdetail.component';

const apiSrvCfg = environment;
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    ForgotComponent,
    HeaderToolbarComponent,
    AdmissionComponent,
    AdddatastudentComponent,
    ChoosefilemultipleComponent,
    AddstudentstepperComponent,
    CheckdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: "never" }),
    HttpClientModule,
    NgxSpinnerModule,
    AuthModule.forRoot(apiSrvCfg),
    MatDialogModule,
    MatStepperModule,
 
    // tslint:disable-next-line: deprecation
    ScrollDispatchModule,
    MatMenuModule,
    MatTableModule,
    MatSelectModule
  ],
  entryComponents: [AddstudentstepperComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
