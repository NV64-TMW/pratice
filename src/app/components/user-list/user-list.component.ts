import { Component, Input, OnInit } from '@angular/core';
import { Register } from '../register/register';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  @Input() userList: Register = { name: '', email: '', phone: 0 };

  constructor() {}
  ngOnInit(): void {
  }
}
