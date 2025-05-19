import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DeleteConfirmModalComponent } from '@app/@shared/_components/modals/delete-confirm-modal/delete-confirm-modal.component';
import { Breadcrumb } from '@app/@shared/_models/user';
import { AlertService } from '@app/@shared/_services/alert.service';
import { I18nService } from '@app/i18n';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import {
  ComparableField,
  comparableOptions,
  comparatorOptions,
  laminateOptions,
  opportunityLocationStates,
  valueOption,
} from '../../models/advance-formula';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-advance-formula',
  templateUrl: './advance-formula.component.html',
  styleUrls: ['./advance-formula.component.scss'],
})
export class AdvanceFormulaComponent implements OnInit {
  breadcrumbData: Breadcrumb[] = [];

  blocks: string[] = ['IF'];
  advanceFormulaForm: FormGroup;

  comparableOptions = comparableOptions;
  comparatorOptions = comparatorOptions;
  valueOptions: valueOption[];
  selectedComparableField: number;

  private subscriptions: Subscription[] = [];

  bsModalRef: BsModalRef;
  constructor(
    private fb: FormBuilder,
    private bsModalService: BsModalService,
    private alertService: AlertService,
    private i18nService: I18nService
  ) {}

  ngOnInit(): void {
    this.breadcrumbData = [
      { label: 'Settings', url: '/qms/settings' },
      { label: 'Price structure', url: '/qms/settings/price-structure' },
      { label: 'Advance formula', url: '' },
    ];
    this.initForm();
  }

  initForm() {
    this.advanceFormulaForm = this.fb.group({
      advanceFormula: this.fb.array([]),
    });
    this.valueOptions = this.getvalueFieldOptionsByComparable(this.selectedComparableField);
  }

  getvalueFieldOptionsByComparable(comparableField: ComparableField) {
    switch (comparableField) {
      case ComparableField.ProjectLaminate:
        return laminateOptions;

      case ComparableField.OpportunityState:
        return opportunityLocationStates;

      default:
        return [];
    }
  }

  addCondition() {}

  addChild() {}

  deleteCondition() {
    const initialState = {};
    this.bsModalRef = this.bsModalService.show(DeleteConfirmModalComponent, {
      initialState,
      animated: true,
      class: 'modal-dialog-centered modal-dialog-scrollable',
    });

    this.bsModalRef.content.event.subscribe((mode: boolean) => {
      if (mode) {
        this.subscriptions.push();
      }

      this.bsModalRef.hide();
    });
  }
}
