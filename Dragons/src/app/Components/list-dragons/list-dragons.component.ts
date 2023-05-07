import { Component, OnInit } from '@angular/core';
import { Dragon } from 'src/app/Models/Dragon.models';
import { DragonService } from '../../Service/dragon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-dragons',
  templateUrl: './list-dragons.component.html',
  styleUrls: ['./list-dragons.component.scss'],
})
export class ListDragonsComponent implements OnInit {
  dragons: Dragon[] = [];
  constructor(private dragonServi: DragonService, private router: Router) {}

  ngOnInit(): void {
    this.dragonServi
      .getDragons()
      .subscribe((dragons: Dragon[]) => (this.dragons = dragons));
  }

  NewDragon() {
    this.router.navigate(['/newDragon']);
  }

  editDragon(index:number){
    this.router.navigate([`/home/editDragon/${index}`]);
  }

  detailDragon(index:number){
    this.router.navigate([`/home/detailDragon/${index}`]);
  }

  deleteDragon(index:number){
    this.dragonServi.deleteDragon(index).subscribe({
      next:()=>{
        location.reload();
      }
    })
  }

}
