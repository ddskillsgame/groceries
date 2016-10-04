import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'my-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  providers: [HeroService] 
})

export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  constructor( 
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];   // + is casting params, which is text, to an int
      this.heroService.getHero(id)
        .then(hero => this.hero = hero);
    })
  }

  goBack(): void {
    this.location.back();  // This works for a demo - not real life check out CanDeactivate guard
  }

}
