import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Activity } from './activity.model';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private http: HttpClient) { }

  addActivity(activity: Activity, id: string) {
      return this.http.post('/add', { id : id, activity: activity}, {responseType: 'json'});
  }


  getActivity(id: string) {
    return this.http.get(`/info/${id}`, {responseType: 'json'}).pipe(map( (activities) => {
      return activities;
    }));
  }

  deleteHistory(id: string){
    return this.http.delete(`/${id}`);
  }

}
