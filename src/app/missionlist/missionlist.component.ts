import { Component } from '@angular/core';
import { RestapiServiceService } from '../network/restapi-service.service';
import { NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { Mission } from '../models/mission';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-missionlist',
  standalone: true,
  imports: [NgFor,NgIf, MatListModule,
    MatButtonModule,
    MatDividerModule,MatCardModule,MatIconModule],
  templateUrl: './missionlist.component.html',
  styleUrl: './missionlist.component.css'
})
export class MissionlistComponent {
  launchList: Mission[] = [];
  years = ["2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"];
  filteredMissions: Mission[] = [];
  selectedYear: string = "";
  constructor(private restApiService: RestapiServiceService, private router: Router) { }
  ngOnInit(): void {
    this.restApiService.getLaunches().subscribe((data: any) => {
      this.launchList = data;
      this.filteredMissions = data
    });
  }
  filterByYear(year: string): void {
    this.selectedYear = year;
    this.restApiService.getLaunchesByYear(year).subscribe((data: any) => {
      this.filteredMissions = data
    });
  }
  resetFilter(): void {
    this.selectedYear = "";
    this.filteredMissions = this.launchList;
  }
  toggleDetails(mission: any): void {
    this.router.navigate(['/mission-details'], { queryParams: { flightNumber: mission.flight_number } });
  }


}
