import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.scss']
})
export class ModalDeleteComponent implements OnInit {

  @Input() componentSelected!:string;
  @Input() idSelected!:number;
  @Input() nameComponent!:string;

  constructor() { }

  ngOnInit(): void {
  }

}
