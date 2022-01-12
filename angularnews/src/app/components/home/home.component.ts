import { Component, OnInit } from '@angular/core';
import { NewsapiService } from 'src/app/services/newsapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  news: any = [];
  constructor(private newsApiService: NewsapiService) {}

  ngOnInit() {
    this.newsApiService.getAllNews().subscribe((data) => {
      this.news = data;
    });
  }
}
