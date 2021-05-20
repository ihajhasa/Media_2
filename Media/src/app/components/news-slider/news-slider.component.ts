import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-slider',
  templateUrl: './news-slider.component.html',
  styleUrls: ['./news-slider.component.css']
})
export class NewsSliderComponent implements OnInit {

  newsList: any[] = []
  images: any[] = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(private router: Router,
    private _news: NewsService) { }

  ngOnInit(): void {
    this._news.getPublicAllNews()
    .subscribe((response) => {
      this.newsList = response;
    }, (err) => {
      alert('Error getting news')
      console.log(err)
    })
  }

}
