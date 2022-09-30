import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detail-word',
  templateUrl: './detail-word.component.html',
  styleUrls: ['./detail-word.component.css']
})
export class DetailWordComponent implements OnInit {
detail: string;
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.detail = this.activatedRoute.snapshot.params.detail;
  }

}
