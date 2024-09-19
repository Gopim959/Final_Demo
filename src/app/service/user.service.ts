import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  getUserList(): any[] {
    return JSON.parse(localStorage.getItem('users') || '[]');
  }
  editUser(updatedUser: any) {
    let users = this.getUserList();
    const index = users.findIndex(user => user.id === updatedUser.id);
    if (index !== -1) {
      users[index] = updatedUser;
      localStorage.setItem('users', JSON.stringify(users));
    }
  }

  deleteUser(userId: number) {
    let users = this.getUserList();
    users = users.filter(user => user.id !== userId);
    localStorage.setItem('users', JSON.stringify(users));
  }
}
