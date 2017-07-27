import { Component } from '@angular/core';

// Hero model
export class Hero {
  id: number;
  name: string;
}

// a HEROES array of type Hero. An array based on the Hero class above.
const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

@Component({
  selector: 'my-app',
  // Two-way data binding: [(ngModel)] directive is the Angular syntax to bind the hero.name property to the textbox. Data flows in both directions: from the property to the textbox, and from the textbox back to the property.
  // Although NgModel is a valid Angular directive, it isn't available by default. It belongs to the optional FormsModule. You must opt-in to using that module. To do so, import FormsModule in app.module.ts.
  template: `
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
      <ul class="heroes">
        <li *ngFor="let hero of heroes">
          <span class="badge">{{hero.id}}</span> {{hero.name}}
        </li>
      </ul>
    <div>
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: {{hero.name}}</label>
      <input [(ngModel)]="hero.name" placeholder="name">
    </div>
    `,
    styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})
export class AppComponent {
  title = 'Tour of Heroes';
  // a public property in AppComponent that exposes the heroes for binding.
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  heroes = HEROES; // The heroes type isn't defined because TypeScript infers it from the HEROES array.
}




// Adding these styles makes the file much longer. In a later page you'll move the styles to a separate file.

// When you assign styles to a component, they are scoped to that specific component. These styles apply only to the AppComponent and don't affect the outer HTML.
