import { Component, OnInit, TemplateRef } from '@angular/core';
import { NbDialogService} from '@nebular/theme';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private dialogService: NbDialogService) { 
  }

  ngOnInit(): void {
  }

  checked = false;

  toggle(checked: boolean) {
    this.checked = checked;
  }

  openForgetPassword(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog);
  }
}
