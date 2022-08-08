import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SwService {
  stellariumSw:boolean;
  streamingSW:boolean;

  i:number;
  j:number;

  constructor() { 
    this.stellariumSw=false;
    this.i=0;
    this.j=0;
  }
  ngOnInit() { }

  public swstellarium(){
    this.i+=1;
    this.j = 0;
    this.streamingSW = false;
    if(this.i>1){
      this.i=0;
    }
    if(this.i==0){
      this.stellariumSw=false;
    }
    else{
      this.stellariumSw=true;
    }
    return this.stellariumSw;
  }

  public swyoutube(){
    this.j+=1;
    this.i = 0;
    this.stellariumSw = false;
    if(this.j>1){
      this.j = 0;
    }
    if(this.j == 0){
      this.streamingSW=false;
    }
    else{
      this.streamingSW=true;
    }
    return this.streamingSW;
  }
}
