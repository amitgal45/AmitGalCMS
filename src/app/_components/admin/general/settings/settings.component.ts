import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GeneralService } from 'src/app/_services/general.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private generalService:GeneralService) { }

  onUpdateSettings(form:NgForm){
    this.generalService.setHeaderObject(form.value)
    // console.log(form.value)

  }

  ngOnInit(): void {
  }

}
