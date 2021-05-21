import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { from } from 'rxjs';
import { NewsService } from '../../services/news.service';


@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {
  addnewsForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(""),
    url : new FormControl(''),
    urlToImage: new FormControl(''),
    publishedAt : new FormControl(''),
    category: new FormControl('')
  });

  addValueToServer(){
    console.log(this.addnewsForm.value);
    this._newsService.postNews(this.addnewsForm.value).subscribe(
      res => console.log(res),
      err => console.log(err)
    )
    this.router.navigate(['/admin/'])

  }

  constructor(private _newsService:NewsService,private router: Router, private route: ActivatedRoute) { 

  }

  ngOnInit(): void {
  }

}
//  Title , Desciption, Url, UrltoImage,published at, category