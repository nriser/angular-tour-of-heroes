import { Injectable } from '@angular/core';
// import the Angular Injectable function and apply the function as an @Injectable() decorator.

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

// The @Injectable() decorator tells TypeScript to emit metadata about the service. The metadata specifies that Angular may need to inject other dependencies into this service.
// Although the HeroService doesn't have any dependencies at the moment, applying the @Injectable() decorator ​from the start ensures consistency and future-proofing.
@Injectable() // Don't forget the parentheses. Omitting them leads to an error that's difficult to diagnose. We need to turn our service into something that can be safely used by our dependency injector. Example: Injecting HTTP as a dependency. We can do this because our service  class is injectable
export class HeroService {
  // Promisified version. Now it returns a promise. You're still mocking the data. You're simulating the behavior of an ultra-fast, zero-latency server, by returning an immediately resolved Promise with the mock heroes as the result.
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }
}

// The HeroService could get Hero data from anywhere—a web service, local storage, or a mock data source. Removing data access from the component means you can change your mind about the implementation anytime, without touching the components that need hero data.
