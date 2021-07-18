import { Injectable } from '@angular/core';
import { NbIconConfig, NbToastrService } from '@nebular/theme';

enum AlertTypes{
  PRIMARY = 'primary',
  WARNING = 'warning',
  INFO = 'info',
  DANGER = 'danger',
  SUCCESS = 'success'
}

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  
  constructor(private toastrService: NbToastrService) {
  }

  showAlert(subtitle: string, title: string, status: AlertTypes,) {
    this.toastrService.show(subtitle, title, {status});
  }

  showAlertPrimary(subtitle: string, title: string){
    this.showAlert(subtitle, title, AlertTypes.PRIMARY)
  }

  showAlertInfo(subtitle: string, title: string){
    this.showAlert(subtitle, title, AlertTypes.INFO)
  }

  showAlertWarning(subtitle: string, title: string){
    this.showAlert(subtitle, title, AlertTypes.WARNING)
  }

  showAlertDanger(subtitle: string, title: string){
    this.showAlert(subtitle, title, AlertTypes.DANGER)
  }

  showAlertSuccess(subtitle: string, title: string){
    this.showAlert(subtitle, title, AlertTypes.SUCCESS)
  }

}
