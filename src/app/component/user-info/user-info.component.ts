import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css'
})
export class UserInfoComponent {
  @Input() Viewusers: any
  activeModal: any;

  constructor(
    private modalService: NgbModal,
  ) { }
  ngOnInit() {

  }

  closeModal() {
    this.modalService.dismissAll();
  }
  close() {
    this.modalService.dismissAll();

  }

}