import { Component } from '@angular/core';
import { NewsapiService } from './services/newsapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'title';
  constructor() {}

  ngOnInit() {}
}
