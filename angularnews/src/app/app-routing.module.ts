import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewsDetailComponent } from './components/news-detail/news-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: ':id', component: NewsDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
