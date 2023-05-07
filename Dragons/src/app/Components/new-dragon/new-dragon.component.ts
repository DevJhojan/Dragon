import { Component, OnInit } from '@angular/core';
import * as forms from '@angular/forms';
import { DragonService } from '../../Service/dragon.service';
import { Dragon } from 'src/app/Models/Dragon.models';
import { Router } from '@angular/router';
import { ParsedVariable } from '@angular/compiler';
@Component({
  selector: 'app-new-dragon',
  templateUrl: './new-dragon.component.html',
  styleUrls: ['./new-dragon.component.scss'],
})
export class NewDragonComponent implements OnInit{
  formNewDragon: forms.FormGroup;
  dragon: Dragon;
  constructor(private dragonServe: DragonService, private router: Router) {
    this.formNewDragon = new forms.FormGroup({
      title: new forms.FormControl('', []),
      description: new forms.FormControl('', []),
      img: new forms.FormControl(''),
    });
  }
  ngOnInit(): void {

  }
  onAddDragon() {
    this.dragon = this.formNewDragon.value;
    this.dragonServe.addDragon(this.dragon).subscribe({
      next: () => {
        this.router.navigate(['']);
      },
    });
  }
  onBack(){
    this.router.navigate([''])
  }
}
