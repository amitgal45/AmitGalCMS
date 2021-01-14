import { Component, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ModalComponent } from './_components/dialog/jw-modal/jw-modal.component';
import { GeneralService } from './_services/general.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AdvancedCMS';

  constructor(private SettingService:GeneralService){
    this.SettingService.setDocTitle()
  }


}
