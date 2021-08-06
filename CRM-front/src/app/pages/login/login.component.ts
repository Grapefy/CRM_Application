import { LoginService } from './../../services/shared/login.service';
import { Router } from '@angular/router';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { NbDialogService} from '@nebular/theme';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private dialogService: NbDialogService, private Router: Router, private fb: FormBuilder, private LoginService: LoginService) { 
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['',Validators.required]
    });
  }

  checked = false;

  toggle(checked: boolean) {
    this.checked = checked;
  }

  openForgetPassword(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog);
  }

  login() {
    var LF;
    LF = this.LoginService.generateLoginArray(this.loginForm)
    this.LoginService.login(JSON.stringify(LF)).subscribe((result: any) => {
      if (result.message == true) {
        window.localStorage.setItem('token', 'token-teste')
        this.Router.navigate(['/customer'])
      } else {
        window.location.reload()
      }
    })
  }
}
