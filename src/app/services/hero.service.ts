import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HEROES } from '../mock-heroes/mock-heroes.component';

@Injectable()
export class HeroService {

  heroes: Hero[];

  constructor(private http: Http) {
    this.getHeroes().then(heroes => this.heroes = heroes);
    // this.getHeroes();
  }

  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
    // console.log(this.http.get('/api/heroes'));
    // return null;
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
               .then(heroes => heroes.find(hero => hero.id === id));
  }

}

export class Hero {
  id: number;
  name: string;
}
