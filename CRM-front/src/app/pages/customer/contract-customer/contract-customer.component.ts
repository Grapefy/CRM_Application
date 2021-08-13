import { ChangeDetectionStrategy, Component, OnInit, TemplateRef } from '@angular/core';
import { NbDialogService } from '@nebular/theme';

@Component({
  selector: 'app-contract-customer',
  templateUrl: './contract-customer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./contract-customer.component.scss']
})
export class ContractCustomerComponent implements OnInit {

  constructor(private dialogService: NbDialogService) { }

  ngOnInit(): void {
  }

  open(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog);
  }

}
