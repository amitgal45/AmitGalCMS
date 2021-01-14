import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/_services/admin.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  public counts;
  public ExpandCollapse:boolean=true;

  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.adminService.getCountsFromDB().then(val=>this.counts=val)
  }

}
