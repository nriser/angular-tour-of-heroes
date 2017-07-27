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
    `
})
export class AppComponent {
  title = 'Tour of Heroes';
  // a public property in AppComponent that exposes the heroes for binding.
  heroes = HEROES; // The heroes type isn't defined because TypeScript infers it from the HEROES array.
}




// The ngFor directive iterates over the component's heroes array and renders an instance of this template for each hero in that array.
// The let hero part of the expression identifies hero as the template input variable (create a variable), which holds the CURRENT hero item for each iteration. You can reference this variable within the template to access the current hero's properties.

// The ngFor directive iterates over the component's heroes array and renders an instance of this template for each hero in that array.
