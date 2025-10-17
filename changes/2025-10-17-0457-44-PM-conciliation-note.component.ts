import { Component, OnInit } from "@angular/core";
import { IBtnActions } from "src/app/interfaces/IStates";
import {
  resetDataConstant,
  resetValuesBTNs,
} from "src/app/shared/functions/reset.functions";
import { configDisabledBTN } from "src/app/settings/GlobalVariables";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ConstantsTableService } from "src/app/services/shared-services/constants-table.service";
import { validateForm } from "src/app/shared/shared-functions/generalFunctions";
import { InvoicesService } from "src/app/services/integrations-services";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "gtf-conciliation-note",
  templateUrl: "./conciliation-note.component.html",
  styleUrls: ["./conciliation-note.component.scss"],
})
export class ConciliationNoteComponent implements OnInit {
  dataForTable: any;
  dataREST: any[] = [];
  configDisabledBTN: IBtnActions = configDisabledBTN;
  form: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _invoicesService: InvoicesService,
    private _dataForTableService: ConstantsTableService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.form = this._fb.group({
      billingSystemId: ["", [Validators.required]],
      fiscalNumber: ["", [Validators.required]],
    });
  }

  get controlValue() {
    return this.form.controls;
  }

  ngOnInit(): void {
    this.dataForTable =
      this._dataForTableService.getDataTable("conciliation-note");
    this.dataForTable.loading = false;
    this.dataForTable.empty = this.dataREST.length === 0;
  }

  validateForm(): void {
    if (this.form.valid) {
... (truncated for brevity)