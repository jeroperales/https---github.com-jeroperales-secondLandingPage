import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { DogAPIService } from '../../services/dog-api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dog.component.html',
  styleUrl: './dog.component.css'
})
export class DogComponent {

  dogService = inject(DogAPIService);
  
  imageUrl: any | null = null;

  getIMG() {
    this.dogService.getRandomDog().subscribe({
        next: (image: any) => {
            this.imageUrl = image.message; 
            console.log('Image URL:', this.imageUrl); 
        },
        error: (e: Error) => {
            console.error('Error fetching image:', e.message);
        }
    });
}

}
