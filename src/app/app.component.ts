import { Component } from '@angular/core';

// Hero model
export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'my-app',
  // Two-way data binding: [(ngModel)] directive is the Angular syntax to bind the hero.name property to the textbox. Data flows in both directions: from the property to the textbox, and from the textbox back to the property.
  // Although NgModel is a valid Angular directive, it isn't available by default. It belongs to the optional FormsModule. You must opt-in to using that module. To do so, import FormsModule in app.module.ts.
  template: `
    <h1>{{title}}</h1>
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name">
    </div>
    `
})
export class AppComponent {
  title = 'Tour of Heroes';
  // Convert the hero from a literal string to a class. Set the component's hero property to be of type Hero, then initialize it with an id of 1 and the name Windstorm.
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
}

// Users are now able to edit the hero name in an <input> textbox. The textbox displays the hero's name property and update that property as the user types.
