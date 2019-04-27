import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../activity.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ActivityService],
})
export class AdminComponent implements OnInit {
  public activities: any = [];
  private id: string;

  constructor(private route: ActivatedRoute, private activityService: ActivityService) { }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });

    this.activityService.getActivity(this.id)
      .subscribe(
        (res) => {
          console.log(res);
          this.activities = res;
        },
        err => {
          console.log(err);
        }
      );
  }

}
