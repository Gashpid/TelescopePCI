import { Component, OnInit } from '@angular/core';
import { SwService } from '../sw.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  stellarium: boolean;
  youtube: boolean;

  objectSwicth: SwService;

  constructor() {
    this.objectSwicth = new SwService;
   }

  ngOnInit() {
  }

  swstellarium(){
    this.stellarium = this.objectSwicth.swstellarium();
    this.youtube = false;
  }
  swyoutube(){
    this.youtube = this.objectSwicth.swyoutube();
    this.stellarium = false;
  }
}
