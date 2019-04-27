import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Activity } from '../activity.model';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [ActivityService],
})
export class ProfileComponent implements OnInit {
  urls: any = [];
  private ImageApi = 'https://picsum.photos';
  private Size = 400;
  private N = 5;
  private id: string;
  constructor(private route: ActivatedRoute, private activityService: ActivityService) { }

  ngOnInit() {
    this.generateImages();
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
  }

  generateImages() {
    this.urls = [];
    for ( let i = 1; i <= this.N; i++) {
      this.urls.push({url: `${this.ImageApi}/${this.Size}/${this.Size}?random=${i}`, id: `${i}` });
    }
  }

  add(activity: Activity, id: string) {
    this.activityService.addActivity(activity, id)
      .subscribe(
        (res) => {
          console.log(res);
        },
        err => {
          console.log(err);
        }
      );
  }

  onClick(event: any) {
    const activity: any = new Activity('click', new Date(), event.target.id);
    this.add(activity, this.id);
  }

  onHover(event: any) {
    const activity: any = new Activity('hover', new Date(), event.target.id);
    this.add(activity, this.id);
  }

  addToFavorite(event: any) {
    const activity: any = new Activity('added to favorites', new Date(), event.target.id);
    this.add(activity, this.id);
  }

}
