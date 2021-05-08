import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment.prod';

import * as Mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  mapa2: Mapboxgl.Map | any;
 

  ngOnInit() 
  {
    (Mapboxgl as any).accessToken = environment.mapBoxTocken;
    this.mapa2 = new Mapboxgl.Map({
    container: 'mapa-mapbox',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-99.2644925,19.3702329], // starting position
    zoom: 15 // starting zoom
    });
   
  }

  

}
