import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsapiService } from 'src/app/services/newsapi.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss'],
})
export class NewsDetailComponent implements OnInit {
  id: string | null = '';
  user: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private newsApiService: NewsapiService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (+this.id! > 15 || +this.id! < 1) {
      this._router.navigate(['/']);
    } else {
      this.newsApiService
        .getUserDetails(this.id)
        .subscribe((data) => (this.user = data));
    }
  }
}
