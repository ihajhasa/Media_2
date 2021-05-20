import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
// import { news } from '../add-news/news';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  newslist:any[]=[]
  constructor(private _newsService:NewsService,private router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this._newsService.getAllNews().subscribe(
      data=>{
        this.newslist = data;

      }
    )
    
  }
  deleteme(id:any){
    console.log('deleteme is called ',id._id)
    this._newsService.deleteNews(id._id).subscribe(
      data=>{
        this._newsService.getAllNews().subscribe(
          data=>{
            this.newslist = data;
          }
        )
      }
    )
    this.router.navigate(['/admin']);
  }
  editme(editnews:any){
    console.log('edit is called for id', editnews._id);
    this.router.navigate(['/admin/edit-news',editnews._id])
  }

}
