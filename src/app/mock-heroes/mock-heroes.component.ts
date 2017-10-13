import { Component, OnInit } from '@angular/core';
import { Hero } from '../services/hero.service';

@Component({
  selector: 'app-mock-heroes',
  templateUrl: './mock-heroes.component.html',
  styleUrls: ['./mock-heroes.component.css']
})
export class MockHeroesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

export const HEROES: Hero[] = [
  {id: 11, name: 'aaa'},
  {id: 12, name: 'bbb'},
  {id: 13, name: 'ccc'},
  {id: 14, name: 'ddd'},
  {id: 15, name: 'eee'},
  {id: 16, name: 'fff'},
  {id: 17, name: 'ggg'},
  {id: 18, name: 'hhh'},
  {id: 19, name: 'iii'},
  {id: 20, name: 'jjj'},
];
