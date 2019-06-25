import { Component, OnInit } from '@angular/core';
import { SectionServiceService } from '../../section-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Section } from 'src/app/models/section';
import {MatTableDataSource} from '@angular/material';
import {Tables} from '../../request-constructor/Tables';
import {Line} from '../../../models/line';
import {DELAY} from '../../../config';

@Component({
  selector: 'app-section-view',
  templateUrl: './section-view.component.html',
  styleUrls: ['./section-view.component.scss']
})
export class SectionViewComponent implements OnInit {
  dataSource:MatTableDataSource<Line>;
  displayedColumns: string[] =Tables.find(el=>el.name=="Line").labels.map(el=>el.name);

  id:number;
  section: Section =new Section();
  constructor(
    private fs: SectionServiceService,
    private rt: ActivatedRoute,
    private router:Router
  ) {
    this.loadFider();
  }


  ngOnInit() {
  }
  loadFider() {
    this.id = this.rt.snapshot.params['id'];
    
     this.fs.getModel(this.id).subscribe(el=>{
       this.section=el;
       this.dataSource=new MatTableDataSource<Line>(el.lines);
     });
     console.log(this.section);
  }
  onSubmit(){
    console.log(this.section.id);
    this.router.navigate(['/electro/section/change/',this.section.id]);
  }
  onSelectLine(row:Line){
    this.router.navigate(['/electro/line/view/',row.id]);

  }
  back() {
    setTimeout(()=>{
      this.router.navigate(['/electro/view']);
    },DELAY);
  }

  remove() {
    this.fs.remove(this.section.id,this.section);
    this.back();
  }
}
