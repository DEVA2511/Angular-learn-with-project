import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { TractorService } from '../services/tractor.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tractor-register',
  imports: [CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatSlideToggleModule,
    HttpClientModule,
    MatGridListModule],
  templateUrl: './tractor-register.component.html',
  styleUrl: './tractor-register.component.scss'
})
export class TractorRegisterComponent {
  tractorForm: FormGroup;
  selectedImages: File[] = [];

  constructor(private fb: FormBuilder, private tractorService: TractorService, private router: Router) {
    this.tractorForm = this.fb.group({
      driverName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      tractorName: ['', Validators.required],
      model: ['', Validators.required],
      year: ['', [Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear())]],
      rentalPrice: ['', [Validators.required, Validators.min(0)]],
      location: ['', Validators.required],
      licenseNumber: ['', Validators.required],
      availability: [true],
      image: []
    });
  }

  // Fetch user's GPS-based location
  fetchLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const location = `${position.coords.latitude}, ${position.coords.longitude}`;
          this.tractorForm.patchValue({ location });
          console.log('Fetched Location:', location);
        },
        (error) => {
          console.error('Error getting location', error);
          alert('Could not retrieve location');
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }

  onFileSelected(event: any) {
    if (event.target.files.length > 0) {
      this.selectedImages = Array.from(event.target.files);
      this.tractorForm.patchValue({ images: this.selectedImages });

    }
  }

  onSubmit() {
    if (this.tractorForm.invalid) {
      alert("Please fill all required fields correctly.");
      return;
    }
  
    const formData = new FormData();
    formData.append('driverName', this.tractorForm.get('driverName')?.value);
    formData.append('phoneNumber', this.tractorForm.get('phoneNumber')?.value);
    formData.append('tractorName', this.tractorForm.get('tractorName')?.value);
    formData.append('model', this.tractorForm.get('model')?.value);
    formData.append('year', this.tractorForm.get('year')?.value);
    formData.append('rentalPrice', this.tractorForm.get('rentalPrice')?.value);
    formData.append('location', this.tractorForm.get('location')?.value);
    formData.append('licenseNumber', this.tractorForm.get('licenseNumber')?.value);
    formData.append('availability', this.tractorForm.get('availability')?.value);
  
    if (this.selectedImages.length > 0) {
      formData.append('image', this.selectedImages[0]); 
    }
  
    this.tractorService.registerTractor(formData).subscribe(() => {
      this.router.navigate(['/tractors']); 
      this.tractorForm.reset();
      this.selectedImages = [];
    }, error => {
      console.error("Error uploading data", error);
      alert("Error uploading data");
    });
  }
  

}
