import { Component } from '@angular/core';
import { Hero } from './hero';

import { HeroService } from './hero.service';

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
`],
providers: [HeroService] // The providers array tells Angular to create a fresh instance of the HeroService when it creates an AppComponent. The AppComponent, as well as its child components, can use that service to get hero data.
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
  // heroes = HEROES; // for lines 14 - 16
  heroes: Hero[];
  selectedHero: Hero; // simply declaring, selectedHero is of type Hero. Eventually, when user clicks on a hero, selectedHero will be defined as the specific hero that was clicked on.
  // hero: Hero = { // for lines 18 - 22
  //   id: 1,
  //   name: 'Windstorm'
  // };

  // a constructor that also defines a private property. Now Angular knows to supply an instance of the HeroService when it creates an AppComponent. The injector doesn't know yet how to create a HeroService. If you ran the code now, Angular would fail (error message: "No provider for HeroService!"). Add to the component's providers metadata.
  // The service is in a heroService private variable.
  constructor(private heroService: HeroService) {

    // AppComponent should fetch and display hero data with no issues. You might be tempted to call the getHeroes() method in a constructor, but a constructor should not contain complex logic, especially a constructor that calls a server, such as a data access method. The constructor is for simple initializations, like wiring constructor parameters to properties. To have Angular call getHeroes(), you can implement the Angular ngOnInit lifecycle hook. Angular offers interfaces for tapping into critical moments in the component lifecycle: at creation, after each change, and at its eventual destruction.
  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

  ngOnInit(): void { // ngOnInit lifecycle hook (ngOnInit method). Angular will call the component at the creation of AppComponent. In this case, initialize by calling getHeroes()
    this.getHeroes();
  }

  // an onSelect() method that sets the selectedHero property to the hero that the user clicks.
  // *ngIf="selectedHero": If selected is true, show. If not selected, false.
  onSelect(hero: Hero): void { // pass in 'hero' (of type Hero) as an argument argument
    this.selectedHero = hero; // define it as 'hero' that the user clicks on, passed in as an argument
  }
}

// const HEROES: Hero[] = [
//   { id: 11, name: 'Mr. Nice' },
//   { id: 12, name: 'Narco' },
//   { id: 13, name: 'Bombasto' },
//   { id: 14, name: 'Celeritas' },
//   { id: 15, name: 'Magneta' },
//   { id: 16, name: 'RubberMan' },
//   { id: 17, name: 'Dynama' },
//   { id: 18, name: 'Dr IQ' },
//   { id: 19, name: 'Magma' },
//   { id: 20, name: 'Tornado' }
// ];

// A class binding is a good way to add or remove a single class.
// When the expression (hero === selectedHero) is true, Angular adds the selected CSS class. When the expression is false, Angular removes the selected class.

// At the moment, the AppComponent defines mock heroes for display. However, defining heroes is not the component's job, and you can't easily share the list of heroes with other components and views. In this page, you'll move the hero data acquisition business to a single service that provides the data and share that service with all components that need the data.

/////// Don't use new with the HeroService
// How should the AppComponent acquire a runtime concrete HeroService instance? You could create a new instance of the HeroService with new like this: heroService = new HeroService(); // don't do this
// However, this option isn't ideal for the following reasons:
// The component has to know how to create a HeroService. If you change the HeroService constructor, you must find and update every place you created the service. Patching code in multiple places is error prone and adds to the test burden.
// You create a service each time you use new. What if the service caches heroes and shares that cache with others? You couldn't do that.
// With the AppComponent locked into a specific implementation of the HeroService, switching implementations for different scenarios, such as operating offline or using different mocked versions for testing, would be difficult.

/////// Inject the HeroService
// Instead of using the new line, you'll add two lines.
// Add a constructor that also defines a private property.
// Add to the component's providers metadata.
// The constructor itself does nothing. The parameter simultaneously defines a private heroService property and identifies it as a HeroService injection site.
// Now Angular knows to supply an instance of the HeroService when it creates an AppComponent.

/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
