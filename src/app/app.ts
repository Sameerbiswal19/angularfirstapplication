import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = ('Angular');
  Name ="Sameer";
  Course="React";
  Address="ECPhase";
  X = 20;
}
