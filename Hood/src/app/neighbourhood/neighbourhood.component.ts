import { Component, OnInit } from '@angular/core';
// import { HoodService } from '../../services/hood.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import {Hood} from '../../classes/hood';

@Component({
  selector: 'app-neighbourhood',
  templateUrl: './neighbourhood.component.html',
  styleUrls: ['./neighbourhood.component.css']
})
export class NeighbourhoodComponent implements OnInit {
  hoodForm = new FormGroup({
    name: new FormControl(''),
    hood_desc: new FormControl(''),
    location: new FormControl('')
  });
  updateForm = new FormGroup({
    id:new FormControl(''),
    name: new FormControl(''),
    hood_desc: new FormControl(''),
    location: new FormControl('')
  });

  // constructor(private hoodService:HoodService ,private httpClient) { }

  ngOnInit(): void {
  }

}
