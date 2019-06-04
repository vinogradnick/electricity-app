import { Component, OnInit } from '@angular/core';
import { Fider } from 'src/app/models/fider';
import { ElectricityService } from '../../electricity.service';
import { ActivatedRoute } from '@angular/router';
import { FiderServiceService } from '../../fider-service.service';

@Component({
  selector: 'app-fider-view',
  templateUrl: './fider-view.component.html',
  styleUrls: ['./fider-view.component.scss']
})
export class FiderViewComponent implements OnInit {
  private id: number;

  fider: Fider = { id: 0,  name: "", voltage: 0, power: 100, geocode: "" }
  constructor(
    private fs: FiderServiceService,
    private rt: ActivatedRoute
  ) {
    this.loadFider();
  }


  ngOnInit() {
  }
  loadFider() {
    this.id = this.rt.snapshot.params['id'];
    
     this.fs.getModel(this.id).subscribe(el=>this.fider=el);
  }

}
