import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})
export class SportComponent implements OnInit {

  newsList: any[] = []

  constructor(private _news: NewsService) { }

  ngOnInit(): void {
    this._news.getPublicAllNews()
    .subscribe((response) => {
      this.newsList = response.filter((article: any) => !article.category.toLocaleLowerCase().localeCompare("sports"))
    }, (err) => {
      alert('Error getting news')
      console.log(err)
    })
  }

}
