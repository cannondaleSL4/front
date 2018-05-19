import {Component, TemplateRef, OnDestroy} from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'modal-login',
  styleUrls: ['modal.css'],
  templateUrl: 'modal.component.html',
  encapsulation: ViewEncapsulation.None
})
export class MyModal implements OnDestroy{
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnDestroy(): void {
    const body = document.getElementsByTagName('body')[0];

    // body.classList.remove('modal-open');
    // body.classList.remove('modal-backdrop');
    // body.classList.remove('.modal-backdrop');
    // body.classList.remove('modal');
    //
    // body.classList.remove('modal-backdrop.show');
    // body.classList.remove('show');

  }
}
