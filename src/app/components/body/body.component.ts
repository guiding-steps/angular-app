import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { NgFor, NgIf } from '@angular/common';

interface CardData {
  title: string;
  subtitle: string;
  content: string;
  imageUrl?: string;
}

@Component({
  selector: 'app-body',
  standalone: true,  
  imports: [MatCardModule, NgFor, NgIf],
  template: `
    <div class="card-container">
      <mat-card class="example-card" *ngFor="let card of cards">
        <mat-card-header>
          <mat-card-title>{{ card.title }}</mat-card-title>
          <mat-card-subtitle>{{ card.subtitle }}</mat-card-subtitle>
        </mat-card-header>
        <img mat-card-image *ngIf="card.imageUrl" [src]="card.imageUrl" alt="Card image">
        <mat-card-content>
          <p>{{ card.content }}</p>
        </mat-card-content>
      </mat-card>
    </div>  
  `,
  styles: [`
      .card-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
          padding: 20px;
        }
      
      .example-card {
        /* max-width: 400px; */
        width: 300px;
        margin: 8px;  
      }  
    `]
})
export class BodyComponent {
  cards: CardData[] = [
    {
      title: 'Card 1',
      subtitle: 'Subtitle 1',
      content: 'This is the content of the first card.',
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
    },
    {
      title: 'Card 2',
      subtitle: 'Subtitle 2',
      content: 'This is the content of the second card.'
    },
    {
      title: 'Card 3',
      subtitle: 'Subtitle 3',
      content: 'This is the content of the third card.',
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg'
    }
  ];
}

