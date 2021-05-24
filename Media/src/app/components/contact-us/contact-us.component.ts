import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Contact } from './contact';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private flashMessage: FlashMessagesService) { }

  contact : Contact = {
    email: '',
    message:'',
    name:'',
    subject:'',
  }
  ngOnInit(): void {
  }
add(){
  this.contact ={
    email: '  ',
    message:' ',
    name:' ',
    subject:' ',
    
  }
}

  showFlash() {
    
    this.flashMessage.show('Your request has been sent successfully', { cssClass: 'alert-success', timeout: 1000 });

    this.add();


  }
}
