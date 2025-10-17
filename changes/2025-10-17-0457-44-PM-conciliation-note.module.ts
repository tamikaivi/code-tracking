import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ConciliationNoteComponent } from "./conciliation-note.component";
import { SharedModule } from "src/app/shared.module";
import { SharedComponentModule } from "src/app/shared/shared-component/shared-component.module";
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { CreateConciliationNoteComponent } from "../create-conciliation-note/create-conciliation-note.component";

const routes: Routes = [
  {
    path: "",
    component: ConciliationNoteComponent,
  },
  {
    path: "create-concilation",
    component: CreateConciliationNoteComponent,
  },
];

@NgModule({
  declarations: [ConciliationNoteComponent, CreateConciliationNoteComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    SharedComponentModule,
    SharedModule,
  ],
})
export class ConciliationNoteModule {}