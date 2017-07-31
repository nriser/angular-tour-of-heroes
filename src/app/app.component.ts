import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes"
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <hero-detail [hero]="selectedHero"></hero-detail>
  `, // Putting square brackets around the hero property, to the left of the equal sign (=), makes it the target of a property binding expression. You must declare a target binding property to be an input property (in hero-detail.component.ts). Otherwise, Angular refuses to bind to that property and throws an error. the @Input decorator tells Angular that this property is public and available for binding by a parent component.
  // Coordinate the master AppComponent with the HeroDetailComponent by binding the selectedHero property of the AppComponent to the hero property of the HeroDetailComponent. Now every time the selectedHero changes, the HeroDetailComponent gets a new hero to display.
  // [hero] (from hero-detail component) is set to "selectedHero", which is originally defined as the hero clicked on by user.
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
  heroes = HEROES; // for lines 14 - 16
  selectedHero: Hero; // simply declaring, selectedHero is of type Hero. Eventually, when user clicks on a hero, selectedHero will be defined as the specific hero that was clicked on.
  // hero: Hero = { // for lines 18 - 22
  //   id: 1,
  //   name: 'Windstorm'
  // };

  // an onSelect() method that sets the selectedHero property to the hero that the user clicks.
  // *ngIf="selectedHero": If selected is true, show. If not selected, false.
  onSelect(hero: Hero): void { // pass in 'hero' (of type Hero) as an argument argument
    this.selectedHero = hero; // define it as 'hero' that the user clicks on, passed in as an argument
  }
}

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

// A class binding is a good way to add or remove a single class.
// When the expression (hero === selectedHero) is true, Angular adds the selected CSS class. When the expression is false, Angular removes the selected class.

/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
