import { Component } from '@angular/core';

// Hero model
export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'my-app',
  // interpolation binding syintax
  template: `
  <h1>{{title}}</h1>
  <h2>{{hero.name}} details!</h2>
  <div><label>id: </label>{{hero.id}}</div>
  <div><label>name: </label>{{hero.name}}</div>
  `,
})
export class AppComponent {
  title = 'Tour of Heroes';
  // Convert the hero from a literal string to a class. Set the component's hero property to be of type Hero, then initialize it with an id of 1 and the name Windstorm.
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
}
