import { WineryComponent } from './components/winery/winery.component';
import { WineComponent } from './components/wine/wine.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'navigation', component: NavigationComponent },
  { path: 'wines/:id', component: WineComponent },
  { path: 'wines', component: WineComponent },
  { path: 'wineries/:id', component: WineryComponent },
  { path: 'wineries', component: WineryComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
