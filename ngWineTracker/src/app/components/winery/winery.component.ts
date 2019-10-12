import { NgForm } from '@angular/forms';
import { Winery } from './../../models/winery';
import { WineryService } from './../../services/winery.service';
import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-winery',
  templateUrl: './winery.component.html',
  styleUrls: ['./winery.component.css']
})
export class WineryComponent implements OnInit {

  wineries: Winery[] = [];
  newWinery: Winery = new Winery();
  selected: Winery = null;
  urlWineryId: string;

  constructor(private wineryServ: WineryService) { }

  ngOnInit() {
    this.reload();
  }

  displayTable() {
    this.selected = null;
  }

  reload() {
    this.wineryServ.index().subscribe(
      success => {

        this.wineries = success;
        console.log(this.wineries);
        if (this.urlWineryId) {
          this.wineryServ.show(this.urlWineryId).subscribe(
            data => {
              this.selected = this.wineries[parseInt(this.urlWineryId, 10) - 1];
              this.selected = data;
              this.urlWineryId = '';
            },
            err => {
              console.error('Error geting Todo by Id');
              console.error(err);
            },
            () => {
              this.urlWineryId = '';
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

  addWinery(form: NgForm) {

    this.newWinery.name = form.value.name;
    this.newWinery.city = form.value.city;
    this.newWinery.link = form.value.link;
    this.wineryServ.create(this.newWinery).subscribe(
      data => {
        this.newWinery = new Winery();
        form.reset();
        this.reload();
      },
      err => console.error('Observer got an error: ' + err)
    );
  }

}
