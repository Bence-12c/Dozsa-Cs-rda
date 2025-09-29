import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fo.component.html',
  styleUrl: './fo.component.css'
})
export class FoComponent {
  orszagok = [
  {name: "Olaszország", capital: "Róma", pop: 58974433},
  {name: "Magyarország", capital: "Budapest", pop: 9584627},
  {name: "Dánia", capital: "Koppenhága", pop: 5959464},
  {name: "Írország", capital: "Dublin", pop: 5149139},
  {name: "Portugália", capital: "Lisszabon", pop: 10639726}
  

  ]
}
