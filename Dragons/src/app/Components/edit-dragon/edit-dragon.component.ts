import { Component, OnInit } from '@angular/core';
import * as forms from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Dragon } from 'src/app/Models/Dragon.models';
import { DragonService } from 'src/app/Service/dragon.service';

@Component({
  selector: 'app-edit-dragon',
  templateUrl: './edit-dragon.component.html',
  styleUrls: ['./edit-dragon.component.scss'],
})
export class EditDragonComponent implements OnInit {
  formUpdateDragon: forms.FormGroup;
  dragon: Dragon;
  id: number;
  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private dragonServi: DragonService
  ) {
    this.formUpdateDragon = new forms.FormGroup({
      title: new forms.FormControl('', [forms.Validators.required]),
      description: new forms.FormControl('', [forms.Validators.required]),
      img: new forms.FormControl('', [forms.Validators.required]),
    });

    this.dragon = new Dragon();
  }
  ngOnInit(): void {
    this.activeRoute.params.subscribe(async (params) => {
      this.id = parseInt(params['idDragon']);
      this.dragon = await this.dragonServi.getDragon2(this.id);
    });
  }
  update() {
    this.activeRoute.params.subscribe(async (params) => {
      this.id = parseInt(params['idDragon']);

      this.dragon = this.formUpdateDragon.value;

      this.dragonServi.updateDragon(this.id, this.dragon).subscribe({
        next: () => {
          this.router.navigate(['']);
        },
      });
    });
  }

  titleCurren() {
    if (this.formUpdateDragon.get('title').value != '') {
      return alert('El campo para el nuevo titulo no esta vacio');
    } else {
      this.formUpdateDragon.get('title').setValue(this.dragon.title);
    }
  }
  descriptionCurren() {
    if (this.formUpdateDragon.get('description').value != '') {
      return alert('El campo para la nueva descripción no esta vacio');
    } else {
      this.formUpdateDragon
        .get('description')
        .setValue(this.dragon.description);
    }
  }
  imgCurren() {
    if (this.formUpdateDragon.get('img').value != '') {
      return alert('El campo para la nueva imagen no esta vacio');
    } else {
      this.formUpdateDragon
        .get('img')
        .setValue(this.dragon.img);
    }
  }
}
