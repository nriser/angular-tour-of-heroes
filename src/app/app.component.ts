import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes" (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <div *ngIf="selectedHero">
      <h2>{{selectedHero.name}} details!</h2>
      <div><label>id: </label>{{selectedHero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="selectedHero.name" placeholder="name"/>
      </div>
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

// When the app loads, selectedHero is undefined. The selected hero is initialized when the user clicks a hero's name. Angular can't display properties of the undefined selectedHero and throws the following error, visible in the browser's console: Cannot read property 'name' of undefined in [null]
// Although selectedHero.name is displayed in the template, you must keep the hero detail out of the DOM until there is a selected hero.
// When there is no selected hero, the ngIf directive removes the hero detail HTML from the DOM. There are no hero detail elements or bindings to worry about.
// When the user picks a hero, selectedHero becomes defined and ngIf puts the hero detail content into the DOM and evaluates the nested bindings.


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
