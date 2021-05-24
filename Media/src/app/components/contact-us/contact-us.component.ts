import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ContactusService } from 'src/app/services/contactus.service';
import { Contact } from './contact';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  
  contactName!:string;
  contactEmail!:string;
  contactSubject!:string;
  contactMessage!:string;
  contact : Contact = {
    email: '',
    message:'',
    name:'',
    subject:'',
  }
  
  constructor(private flashMessage: FlashMessagesService,private contactservice: ContactusService) { }

  ngOnInit(): void {
  }
  
add(){
  this.contact ={
    email: this.contactEmail,
    message: this.contactMessage,
    name: this.contactName,
    subject: this.contactSubject,
  }
}

  showFlash() {
    this.flashMessage.show('Your request has been sent successfully', { cssClass: 'alert-success', timeout: 1000 });
    this.add();
    this.sendmessage();
  }

  sendmessage(){
    this.contactservice.send(this.contact).subscribe(
      (response) => {
        console.log('ok');
      }, 
      (err) => {alert(JSON.stringify(err, null, 4))})
  }

}