import { Component, OnInit } from '@angular/core';
import { Line } from 'src/app/models/line';
import { LineServiceService } from '../line-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent implements OnInit {
  id:number;
  line: Line =new Line();
  constructor(
    private fs: LineServiceService,
    private rt: ActivatedRoute,
    private router:Router
  ) {
    this.loadFider();
  }


  ngOnInit() {
  }
  loadFider() {
    this.id = this.rt.snapshot.params['id'];
    
     this.fs.getModel(this.id).subscribe(el=>this.line=el);
     console.log(this.line);
  }
  onSubmit(){
    console.log(this.line.id);
    this.router.navigate(['/electro/line/change/',this.line.id]);
  }

}
