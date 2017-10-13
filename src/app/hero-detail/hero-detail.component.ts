import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Hero, HeroService } from '../services/hero.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  id: number;
  selectedHero: Hero;

  constructor(
    private heroService: HeroService,
    private activatedRoute: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    // 获取id
    this.id = this.activatedRoute.snapshot.params['id'];

    // 获取当前活动对象
    this.activatedRoute.paramMap
      .switchMap((params: ParamMap) => this.heroService.getHero(Number(params.get('id'))))
      .subscribe(hero => this.selectedHero = hero);
  }

  /**
   *  返回按钮事件
   *  @return void
   */
  goBack(): void {
    this.location.back();
  }

}
