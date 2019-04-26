import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  urls: any = [];
  private ImageApi = 'https://picsum.photos';
  private Size = 400;
  private N = 5;
  private id = '';
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.generateImages();
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      alert(`hello ${this.id}`);
    });
  }

  generateImages() {
    this.urls = [];
    for ( let i = 1; i <= 5; i++) {
      this.urls.push({url: `${this.ImageApi}/${this.Size}/${this.Size}?random=${i}`, id: `${i}` });
    }
  }

  onClick(event: any) {
    console.log(event.target.id);
  }

  onHover(event: any){
    console.log(event.target.id);
  }

  addToFavorite(event : any){
    console.log(event.target.id);
  }

}
