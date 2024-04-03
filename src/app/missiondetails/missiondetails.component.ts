import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestapiServiceService } from '../network/restapi-service.service';
import { NgIf } from '@angular/common';
import { Mission } from '../models/mission';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-missiondetails',
  standalone: true,
  imports: [NgIf,  MatCardModule,
    MatIconModule],
  templateUrl: './missiondetails.component.html',
  styleUrl: './missiondetails.component.css'
})
export class MissiondetailsComponent {
  missionData: Mission;
  constructor( private route:ActivatedRoute, private restApiService:RestapiServiceService) { 
    this.missionData = {} as Mission;
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      let flightNumber = JSON.parse(params['flightNumber']);
      console.log(flightNumber,"flightNumber");
      this.restApiService.getLaunchesByflightNumber(flightNumber).subscribe((data: any) => {
        this.missionData = new Mission(
          data.mission_name,
          data.launch_year,
          data.details,
          data.links,
          data.rocket,
          data.launch_site
        );
      });
    });
  }
}
