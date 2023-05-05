import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { NewDragonComponent } from './Components/new-dragon/new-dragon.component';
import { EditDragonComponent } from './Components/edit-dragon/edit-dragon.component';
import { DetailDragonComponent } from './Components/detail-dragon/detail-dragon.component';
import { ListDragonsComponent } from './Components/list-dragons/list-dragons.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home/listDragon' },
  { path: 'home', component: HomeComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'listDragon', component: ListDragonsComponent },
      { path: 'newDragon', component: NewDragonComponent },
      { path: 'editDragon/:idDragon', component: EditDragonComponent },
      { path: 'detailDragon/:idDragon', component: DetailDragonComponent },
    ],
  },
  { path: 'editDragon/:idDragon', redirectTo: '/home/editDragon/:idDragon' },
  { path: 'listDragon', redirectTo: '/home/listDragon' },
  { path: 'newDragon', redirectTo: '/home/newDragon' },
  {
    path: 'detailDragon/:idDragon',
    redirectTo: '/home/detailDragon/:idDragon',
  },
  { path: '**', redirectTo: '/home/listDragon' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
