import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class AdminPanelComponent implements OnInit {
public ExpandCollapse:boolean=true;

expandCollapseFunc(){
  if(this.ExpandCollapse==true){
    this.ExpandCollapse=false;
  }else{
    this.ExpandCollapse=true;
  }
  console.log(this.ExpandCollapse)
}
  goToProducts(){
    this.router.navigate(['admin/products', {outlets: 'admin'}]
    );
  }

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
