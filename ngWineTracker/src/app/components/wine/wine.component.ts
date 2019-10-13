import { Wine } from './../../models/wine';
import { WineService } from './../../services/wine.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-wine',
  templateUrl: './wine.component.html',
  styleUrls: ['./wine.component.css']
})
export class WineComponent implements OnInit {

  wines: Wine[] = [];
  selected: Wine = null;
  newWine: Wine = new Wine();
  editWine = null;
  urlWineId: string;
  urlLow: string;
  urlHigh: string;

  constructor(private wineServ: WineService,
              private currentRoute: ActivatedRoute) { }

  ngOnInit() {
    if (!this.selected && this.currentRoute.snapshot.paramMap.get('id')) {
      this.currentRoute.paramMap.subscribe(params => {
        this.urlWineId = this.currentRoute.snapshot.paramMap.get('id');
      });
    }
    if (this.currentRoute.snapshot.paramMap.get('low') && this.currentRoute.snapshot.paramMap.get('high')) {
      this.currentRoute.paramMap.subscribe(params => {
        this.urlLow = this.currentRoute.snapshot.paramMap.get('low');
        this.urlHigh = this.currentRoute.snapshot.paramMap.get('high');
      });
    }
    this.getNumberOfWines();
    this.reload();
  }

  displayWine(wine: Wine) {
    this.selected = wine;
    this.wineServ.show(wine.id.toString()).subscribe(
      success => {
        this.selected = success;
        this.reload();
      },
      failure => console.error('Error in WineComponent.displayWine: ' + failure)
    );
    }

  displayTable() {
    this.selected = null;
  }

  getNumberOfWines(): number {
    return this.wines.length;
  }

  getWineByPrice(form: NgForm) {
    const low = form.value.low;
    const high = form.value.high;
    this.wineServ.getByPrice(low, high).subscribe(
      success => {
        this.wines = success;
        this.getNumberOfWines();
        this.reload();
        if (this.urlLow && this.urlHigh) {
          this.wineServ.getByPrice(this.urlLow, this.urlHigh).subscribe(
            data => {
              this.wines = data;
              this.urlWineId = '';
              this.getNumberOfWines();
            },
            err => {
              console.error('Error in WineComponent.getWineByPrice');
              console.error(err);
            },
            () => {
              this.urlWineId = '';
            }
          );
        }
      },
      failure => {
        console.error('Error in WineComponent.getWineByPrice: ' + failure);
      },
    );
  }

  reload() {
    this.wineServ.index().subscribe(
      success => {
        this.wines = success;
        this.getNumberOfWines();
        if (this.urlWineId) {
          this.wineServ.show(this.urlWineId).subscribe(
            data => {
              this.selected = this.wines[parseInt(this.urlWineId, 10) - 1];
              this.selected = data;
              this.urlWineId = '';
              this.getNumberOfWines();
            },
            err => {
              console.error('Error geting Wine by Id');
              console.error(err);
            },
            () => {
              this.urlWineId = '';
            }
          );
        }
      },
      err => {
        console.error('Error in WineComponent.reload');
        console.error(err);
      }
    );
  }

  addWine(form: NgForm) {
    console.log(form);

    this.newWine.name = form.value.name;
    this.newWine.year = form.value.year;
    this.newWine.type = form.value.type;
    this.newWine.color = form.value.color;
    this.newWine.rating = form.value.rating;
    this.newWine.price = form.value.price;
    this.newWine.tastingNotes = form.value.tastingNotes;
    this.newWine.winery.name = form.value.wineryName;

    this.wineServ.create(this.newWine).subscribe(
      data => {
        this.newWine = new Wine();
        form.reset();
        this.reload();
      },
      err => console.error('Error in WineComponent.addWine: ' + err)
    );
  }

  setEditWine() {
    this.editWine = Object.assign({}, this.selected);
  }

  updateWine(editWine: Wine) {
    this.wineServ.update(editWine).subscribe(
      data => {
        this.reload();
        this.selected = null;
        this.editWine = null;
      },
      err => console.error('Error in WineComponent.updateWine: ' + err)
    );
  }

  deleteWine(id: number) {
    this.wineServ.destroy(id).subscribe(
      data => {
        this.reload();
        this.displayTable();
      },
      err => {
        console.error('Error in WineComponent.deleteTodo');
        console.error(err);
      }
    );
  }

}
