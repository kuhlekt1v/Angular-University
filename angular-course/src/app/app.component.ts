import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  data = {
    title: 'Angular Core Deep Dive',
  };

  onLogoClicked() {
    alert('Hello world!');
  }

  onKeyUp(newTitle: string) {
    this.data.title = newTitle;
  }
}
