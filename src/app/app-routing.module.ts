import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdmissionComponent } from "./pages/admission/admission.component";
import { AdddatastudentComponent } from "./pages/adddatastudent/adddatastudent.component";
import { ChoosefilemultipleComponent } from "./pages/choosefilemultiple/choosefilemultiple.component";
import { CheckdetailComponent } from "./pages/checkdetail/checkdetail.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "app-admission",
    pathMatch: "full"
  },
  { path: "app-admission", component: AdmissionComponent },
  { path: "app-adddatastudent", component: AdddatastudentComponent },
  { path: "app-choosefilemultiple", component: ChoosefilemultipleComponent },
  { path: "app-checkdetail", component: CheckdetailComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
