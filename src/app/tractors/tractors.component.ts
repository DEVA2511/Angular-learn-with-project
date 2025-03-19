import { Component } from '@angular/core';
import { MatCell, MatHeaderCell, MatHeaderRow, MatRow, MatTable } from '@angular/material/table';
import { MatTabBody } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { Tractor, TractorService } from '../services/tractor.service';
import { MatIcon } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tractors',
  imports: [MatTable,MatHeaderCell,MatCell,MatHeaderRow,MatRow,MatTableModule,MatIcon,CommonModule],
  templateUrl: './tractors.component.html',
  styleUrl: './tractors.component.scss'
})

export class TractorsComponent {
 
  displayedColumns: string[] = ['id', 'driverName', 'phoneNumber',"location","rent",'actions'];
  dataSource: Tractor[] = [];

  constructor(private tractorService: TractorService) {}

  ngOnInit(): void {
    this.loadTractors();
  }

  loadTractors() {
    this.tractorService.getAllTractors().subscribe({
      next: (data) => this.dataSource = data,
      error: (err) => console.error('Error fetching tractors:', err)
    });
  }

  edit(element: any) {
    const updatedData = { ...element, driverName: 'Updated Name' }; // Modify as needed
    this.tractorService.updateTractor(element.id, updatedData).subscribe(response => {
      console.log('Updated:', response);
      this.loadTractors(); // Refresh the list
    });
  }

  delete(id: number) {
    if (confirm('Are you sure you want to delete this tractor?')) {
      this.tractorService.deleteTractor(id).subscribe(response => {
        console.log('Deleted:', response);
        this.loadTractors(); // Refresh the list
      });
    }
  }
}
