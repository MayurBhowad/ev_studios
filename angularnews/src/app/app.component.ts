import { Component } from '@angular/core';
import { NewsapiService } from './services/newsapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'title';
  news: any;
  constructor(private newsApiService: NewsapiService) {}

  ngOnInit() {
    this.newsApiService.getAllNews().subscribe((data) => {
      console.log(data);
      this.news = data;
    });
  }
}
