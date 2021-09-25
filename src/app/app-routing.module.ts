import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesComponent } from './component/home/activities/activities.component';
import { PresentationComponent } from './component/home/presentation/presentation.component';

const routes: Routes = [
  { path: '', redirectTo: '/presentation', pathMatch: 'full' },
  { path: 'presentation', component: PresentationComponent },
  { path: 'activities', component: ActivitiesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
