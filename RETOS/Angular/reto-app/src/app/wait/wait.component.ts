import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wait',
  templateUrl: './wait.component.html',
  styleUrls: ['./wait.component.css']
})
export class WaitComponent implements OnInit {
  public data : any = '';
  public load : boolean = false;
    
    ngOnInit(): void {
      setTimeout(() =>{
  this.load = true;
  
      }, 6000)
    }
  
  
  
  }
  
  