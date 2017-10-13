import { Component, OnInit } from '@angular/core';
import { Hero, HeroService } from '../services/hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    public router: Router,
    private heroService: HeroService) { }

  ngOnInit() {
    this.setHeroes();
  }

  setHeroes(): void {
    this.heroes = this.heroService.heroes;
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.router.navigateByUrl(`/detail/${hero.id}`);
  }
}
