import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ElectricityService } from '../electricity.service';
import { Fider } from 'src/app/models/fider';
import { Tp } from 'src/app/models/tp';
import { Section } from 'src/app/models/section';
import { Line } from 'src/app/models/line';
import { ElectroObject, IElectroReview } from 'src/app/models/electro-object';
import { FiderServiceService } from '../fider-service.service';
import { TpServiceService } from '../tp-service.service';
import { SectionServiceService } from '../section-service.service';
import { LineServiceService } from '../line-service.service';


@Component({
  selector: 'app-electricity-review',
  templateUrl: './electricity-review.component.html',
  styleUrls: ['./electricity-review.component.scss']
})
export class ElectricityReviewComponent implements OnInit {
  displayedColumns: string[] = ['Id', 'Name', "Type", 'Power', 'Voltage', 'Geocode'];
  dataSource = new MatTableDataSource(this.loadData());
  constructor(
    private fiderService: FiderServiceService,
    private tpService: TpServiceService,
    private sectionService: SectionServiceService,
    private lineService: LineServiceService,
  ) { }

  ngOnInit() {
  }
  loadData(): IElectroReview[] {
    let data: IElectroReview[] = [];


   

    return data;
  }
  convertate(obj: any): IElectroReview {
    let saveValue = obj as ElectroObject;
    let response: IElectroReview = { id: saveValue.id, name: saveValue.name, voltage: saveValue.voltage, power: saveValue.power, geocode: saveValue.geocode, type: typeof (obj) };

    return response;
  }
}
