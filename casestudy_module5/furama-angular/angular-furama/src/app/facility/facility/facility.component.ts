import { Component, OnInit } from '@angular/core';
import {Facility} from "../../model/facility";

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {
  facilityList: Facility[] = [
    {
      id: 'fa-0001',
      sizeRoom: 85,
      maxPeople: 3,
      price: 2000,
      standard: 'new'
    },
    {
      id: 'fa-0002',
      sizeRoom: 85,
      maxPeople: 3,
      price: 2000,
      standard: 'new'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
