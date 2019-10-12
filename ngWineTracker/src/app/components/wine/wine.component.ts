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

  constructor(private wineServ: WineService,
              private currentRoute: ActivatedRoute) { }

  ngOnInit() {
    if (!this.selected && this.currentRoute.snapshot.paramMap.get('id')) {
      this.currentRoute.paramMap.subscribe(params => {
        this.urlWineId = this.currentRoute.snapshot.paramMap.get('id');
      });
      console.log(this.urlWineId);
      // this.reload();
    }
    this.reload();
  }

  displayWine(wine: Wine) {
    this.selected = wine;
    this.wineServ.show(wine.id.toString()).subscribe(
      data => {
        this.selected = data;
        this.reload();
      },
      err => console.error('Error in WineComponent.displayWine: ' + err)
    );
    }

  displayTable() {
    this.selected = null;
  }

  reload() {
    this.wineServ.index().subscribe(
      success => {
        this.wines = success;
        if (this.urlWineId) {
          this.wineServ.show(this.urlWineId).subscribe(
            data => {
              this.selected = this.wines[parseInt(this.urlWineId, 10) - 1];
              this.selected = data;
              this.urlWineId = '';
            },
            err => {
              console.error('Error geting Todo by Id');
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
