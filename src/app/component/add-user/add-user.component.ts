import { CommonModule } from '@angular/common';
import { Component, ViewChild, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule} from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../service/user.service';
import { ImageCroppedEvent} from 'ngx-image-cropper';
import { DomSanitizer } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ImageCropperComponent } from 'ngx-image-cropper';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-add-user',
  standalone: true,
  providers: [],
  imports: [CommonModule, ReactiveFormsModule, RouterModule, FontAwesomeModule, ImageCropperComponent
  ],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent implements OnInit {
  @ViewChild('imageModal') imageModal: any;

  [x: string]: any;
  userForm!: FormGroup;
  isUpdating = false;
  users: any[] = [];
  userIndex: any;
  editData: any = localStorage.getItem("editData");
  edit_user: any;
  countries = ['India', 'China', 'Pakistan', 'USA', 'Canada', 'Australia',
    'Germany', 'France', 'Japan', 'South Korea', 'Brazil', 'Mexico',
    'United Kingdom', 'Italy', 'Netherlands', 'Sweden', 'Saudi Arabia',
    'South Africa', 'Argentina', 'Turkey', 'United Arab Emirates'];
  defaultCountry = 'India'; // Default value
  activeModal: any;
  imageChangedEvent: any = '';
  croppedImage: any = '';
  imageError: boolean = false;
  isCropped: boolean = false;
  
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private userService: UserService,
    private sanitizer: DomSanitizer,
    private modalService: NgbModal,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.edit_user = JSON.parse(this.editData);
    this.loadForm();
    this.users = JSON.parse(localStorage.getItem('users') || '[]');
    if (this.edit_user) {
      this.isUpdating = true;
      this.edit_Data(); // Prefill the form with existing data
    } else {
    
    }
  }
  
  loadForm() {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      dob: ['', Validators.required],
      Image: ['',Validators.required], // Image validation added later based on mode
      gender: 'male',
      country: [this.defaultCountry],
      active: ['Y']
    });
  }
  
  edit_Data() {
    this.userForm.patchValue({
      name: this.edit_user.name,
      mobile: this.edit_user.mobile,
      email: this.edit_user.email,
      dob: this.edit_user.dob,
      gender: this.edit_user.gender,
      country: this.edit_user.country,
      active: this.edit_user.active
    });
  
    if (this.edit_user.Image) {
      this.croppedImage = this.edit_user.Image;
      this.userForm.patchValue({
        Image: this.croppedImage // Pre-fill the Image field with existing image
      });
      this.isCropped = true;
      
    } else {
      this.croppedImage = '';
      this.isCropped = false;
    }
  }
  
  onSubmit() {
    if (this.userForm.valid) {
      const formValue = {
        ...this.userForm.value,
        Image: this.croppedImage // Use the croppedImage if updated
      };

      // const userExists = this.users.some(user => 
      //   user.email === formValue.email || user.mobile === formValue.mobile
      // );

      // if (userExists) {
      //   this.toastr.error('A user with this email or mobile number already exists.');
      //   return; 
      // }
  
      if (this.isUpdating) {
        this.userService.editUser(formValue); 
        
      } else {
        this.users.push(formValue);
        this.users = this.users.map((user: any, index: number) => ({
          id: index + 1,
          ...user
        }));
        localStorage.setItem('users', JSON.stringify(this.users));
        this.router.navigate(['/user-list']);
        this.toastr.success(this.isUpdating ? 'User Updated successfully' : 'User Added successfully');
      }
    } else {
      this.userForm.markAllAsTouched();
      this.toastr.error('Please fill out all required fields');
    }
  }
  
  updateData() {
    if (this.isUpdating && this.userIndex !== null) {
      if (this.userForm.valid) {
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const index = users.findIndex((user: { id: any; }) => user.id === this.edit_user.id);
        
        if (index !== -1) {
          const updatedUser = {
            id: this.edit_user.id,
            ...this.userForm.value,
            Image: this.croppedImage // Include cropped image in update
          };
  
          users[index] = updatedUser;
          localStorage.setItem('users', JSON.stringify(users));
          this.isUpdating = false;
          this.userIndex = null;
          this.router.navigate(['/user-list']);
          this.toastr.success('User data updated successfully');
        } else {
          this.toastr.error('User not found for update');
        }
      } else {
        this.userForm.markAllAsTouched();
        this.toastr.error('All fields are required and must be valid');
      }
    }
  }

  back() {
    localStorage.removeItem("editData")
    localStorage.removeItem("")
    this.router.navigate(['/user-list']);
  }

  validateMobileNumber(event: any) {
    const inputValue = event.target.value;
    const regex = /^[0-9\-\s\(\)]+$/;
    if (!regex.test(inputValue)) {
      event.target.value = inputValue.slice(0, -1);
    }
  }
  openImageModal() {
    this.modalService.open(this.imageModal, { centered: true});
  }

  fileChangeEvent(event: any): void {
    const file = event.target.files[0];
    if (file && ['image/jpeg', 'image/png', 'image/jpg'].includes(file.type)) {
      this.imageError = false;
      this.imageChangedEvent = event; // Pass event to the cropper
    } else {
      this.imageError = true;
      this.toastr.error('Please upload a valid image (JPEG/PNG)');
    }
  }

  imageCropped(event: ImageCroppedEvent) {
    console.log(event);
    if (event.blob) {
      const reader = new FileReader();
      reader.onloadend = () => {
        this.croppedImage = reader.result as string; // Convert blob to Base64
        this.cdr.detectChanges(); // Trigger change detection
      };
      reader.readAsDataURL(event.blob); // Convert blob to Base64
    } else {
      console.error('Cropped image not available');
    }
  }

  saveCroppedImage(modal: any) {
    if (this.croppedImage) {
      this.userForm.patchValue({
        Image: this.croppedImage // Save Base64 image to the form
      });
      this.toastr.success('Image cropped and saved successfully');
      modal.close();
    } else {
      this.toastr.error('No image cropped to save');
    }
  }

  imageLoaded() {
    console.log('Image successfully loaded into the cropper.');
  }

  cropperReady() {
    console.log('Image cropper is ready.');
  }

  loadImageFailed() {
    this.toastr.error('Failed to load image. Please try again.');
  }
  
}





