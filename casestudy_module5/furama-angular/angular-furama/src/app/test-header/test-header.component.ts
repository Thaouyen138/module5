import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-header',
  templateUrl: './test-header.component.html',
  styleUrls: ['./test-header.component.css']
})
export class TestHeaderComponent implements OnInit {

  now: any;
  constructor() { }

  ngOnInit(): void {
    this.now = new Date();
  }

}
