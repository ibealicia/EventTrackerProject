import { HttpClient } from '@angular/common/http';
import { WineService } from './../../services/wine.service';
import { Wine } from './../../models/wine';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  wines: Wine[] = [];

  constructor(private wineServ: WineService, private http: HttpClient) { }

  ngOnInit() {
    this.getNumberOfWines();
    this.reloadWines();
  }

  getNumberOfWines(): number {
    const result: Wine[] = this.wines;
    return result.length;
  }

    reloadWines() {
      this.wineServ.index().subscribe(
        success => {
          this.wines = success;
        },
        err => {
          console.error('Error in NavigationComponent.reloadWines');
          console.error(err);
        }
      );
    }

}
