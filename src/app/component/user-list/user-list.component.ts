import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule, RouterOutlet } from '@angular/router';
import Swal from 'sweetalert2';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserInfoComponent } from '../user-info/user-info.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, NgxPaginationModule, RouterOutlet],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  users: any[] = [];
  isUpdating: boolean = false;
  userIndex: any;
  searchText: any;
  forSearch: any;
  page: any = 1;
  sortAsc: boolean = true;
  activeFilter: string = 'all';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private userService: UserService,

  ) { }

  ngOnInit() {
    this.users = JSON.parse(localStorage.getItem('users') || '[]');
    this.page = localStorage.getItem("page") ? localStorage.getItem("page") : 1;
    // this.page = localStorage.getItem("page") ? +localStorage.getItem("page")! : 1;
    this.searchText = localStorage.getItem("searchText") || '';
    const savedFilter = localStorage.getItem('activeFilter');
    this.activeFilter = savedFilter ? savedFilter : 'all';
    localStorage.removeItem("page");
    localStorage.removeItem("searchText");

  }

  loadUsers() {
    this.users = this.userService.getUserList(); // Fetch users using UserService
  }

  addBtn() {
    localStorage.removeItem("editData")
    this.router.navigate(['add-user']);
  }

  editData(editData: any) {
    localStorage.setItem("page", String(this.page));
    localStorage.setItem("editData", JSON.stringify(editData));
    localStorage.setItem("searchText", this.searchText);
    this.router.navigate(['edit-user']);
  }

  DeleteAlert(userId: number) {
    Swal.fire({
      title: "Do you want to delete this user?",
      text: "Once deleted, you will not be able to recover this user!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteData(userId); // Use correct userId here
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'The user data is safe!', 'info');
      }
    });
  }

  deleteData(userId: number) {
    const users = this.userService.getUserList();
    const userIndex = users.findIndex(user => user.id === userId);
    if (userIndex !== -1) {
      this.userService.deleteUser(userId);
      this.loadUsers(); // Refresh user list after deleting

      Swal.fire('Deleted!', 'The user has been deleted.', 'success');
    } else {
      Swal.fire('Error!', 'The user could not be found.', 'error');
    }
  }

  updateData() {
    if (this.isUpdating && this.userIndex !== null) {
      const updatedusers = this.users[this.userIndex];
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      users[this.userIndex] = updatedusers;  // Replace with updated users data
      localStorage.setItem('users', JSON.stringify(users));
      localStorage.removeItem(users);
      this.isUpdating = false;
      this.userIndex = null;
      this.router.navigate(['user-list']);
    }
  }

  viewData(user: any) {

    const viewuser = this.modalService.open(UserInfoComponent, {
      size: "md",
      centered: true,
      // backdrop: "static"
    });
    viewuser.componentInstance.Viewusers = user;
  }

  sortByName() {
    this.sortAsc = !this.sortAsc;
  }

  searchList() {
    const usersArray = this.users || [];
    let filteredUsers = this.searchText
    ? usersArray.filter((item: any) =>
        item.name.toLowerCase().includes(this.searchText.toLowerCase())
      )
    : usersArray.slice(); // Creates a shallow copy
    if (this.activeFilter === 'active') {
      filteredUsers = filteredUsers.filter((item: any) => item.active);
    } else if (this.activeFilter === 'inactive') {
      filteredUsers = filteredUsers.filter((item: any) => !item.active);
    }

    return filteredUsers.sort((a, b) => {
      return this.sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
    });
  }

  getTotalRecord(): number {
    return this.searchList().length;
  }

  onFilterRadio(filter: string) {
    this.activeFilter = filter;
    localStorage.setItem('activeFilter', filter);
    this.page = 1;
  }

  onPageChange(page: number) {
    this.page = page;

  }
}
