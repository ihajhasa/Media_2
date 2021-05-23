import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private flashMessage: FlashMessagesService) { }

  ngOnInit(): void {
  }
  showFlash() {
    
    this.flashMessage.show('Your request has been sent successfully', { cssClass: 'alert-success', timeout: 1000 });
  }

  

}
