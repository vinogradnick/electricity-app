import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-change-admin',
  templateUrl: './change-admin.component.html',
  styleUrls: ['./change-admin.component.scss']
})
export class ChangeAdminComponent implements OnInit {
  user: IUser;
  id: number;
  constructor(private activateRoute: ActivatedRoute) {
    activateRoute.params.subscribe(params => this.loadUser(params['id']));
  }

  ngOnInit() {
  }
  loadUser(id: number): void {
    this.user = { id: id, name: "name", password: "f", role: "f", accessLevel: 1 };
  }


}
