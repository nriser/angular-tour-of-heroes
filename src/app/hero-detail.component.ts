import { Component, Input } from '@angular/core'; // import the Component 'symbol'
import { Hero } from './hero';

@Component({ // Component decorator provides the Angular metadata for the component.
  selector: 'hero-detail',
  template: `
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
    </div>
  `
})
export class HeroDetailComponent {
  @Input() hero: Hero; // instance of Hero. Declare that hero is an input property by preceding it with the @Input decorator that you imported earlier. Otherwise, Angular rejects the binding and throws an error.
  // It receives a hero object through its hero input property and then bind to that property with its template.
}
