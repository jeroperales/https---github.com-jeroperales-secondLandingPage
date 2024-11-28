import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HomeComponent } from './components/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'jeroPortfolio';

  onMouseMove(event: MouseEvent): void {
    const container = event.currentTarget as HTMLElement;
    const rect = container.getBoundingClientRect();

    // Calcula la posición del mouse relativa al contenedor
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 15; // Ajusta el valor para mayor o menor desplazamiento
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 15;

    // Actualiza la posición del fondo
    container.style.backgroundPosition = `${50 + x}% ${50 + y}%`;
  }

  resetBackground(): void {
    // Restaura el fondo a la posición central
    const container = document.querySelector('.background-container') as HTMLElement;
    if (container) {
      container.style.backgroundPosition = '50% 50%';
    }
  }
}