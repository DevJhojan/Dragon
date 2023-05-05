import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dragon } from '../Models/Dragon.models';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:3000/Dragons'

@Injectable({
  providedIn: 'root'
})
export class DragonService {

  constructor(private http: HttpClient) {}

  getDragons(): Observable<Dragon[]>{
    return this.http.get<Dragon[]>(baseUrl);
  }

  getDragon(id:number):Observable<Dragon>{
    return this.http.get<Dragon>(`${baseUrl}/${id}`);
  }
  getDragon2(id: number): Promise<Dragon>{
    return this.http.get<Dragon>(`${baseUrl}/${id}`).toPromise();
  }
  addDragon(dragon:Dragon){
    return this.http.post(baseUrl, dragon);
  }

  updateDragon(id:number, dragon:Dragon){
    return this.http.put(`${baseUrl}/${id}`, dragon);
  }

  deleteDragon(id:number){
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
