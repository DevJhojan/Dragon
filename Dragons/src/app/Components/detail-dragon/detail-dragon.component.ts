import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dragon } from '../../Models/Dragon.models';
import { DragonService } from '../../Service/dragon.service';

@Component({
  selector: 'app-detail-dragon',
  templateUrl: './detail-dragon.component.html',
  styleUrls: ['./detail-dragon.component.scss'],
})
export class DetailDragonComponent implements OnInit {
  dragon: Dragon;
  id: number;
  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private dragonServi: DragonService
  ) {
    this.dragon = new Dragon();
  }
  ngOnInit(): void {
    this.activeRoute.params.subscribe(async params=>{
      this.id = parseInt(params['idDragon']);
      this.dragon = await this.dragonServi.getDragon2(this.id);
    })
  }
}
