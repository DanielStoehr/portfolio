import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss'],
})
export class ContactMeComponent implements OnInit {
  submitForm(event: any) {
    event.preventDefault();
    const name: any = document.getElementById('name');
    const email: any = document.getElementById('email');
    const message: any = document.getElementById('message');
    alert('Nachricht wurde an stoehr-daniel@web.de gesendet!');
    name!.value = '';
    email!.value = '';
    message!.value = '';
  }
  constructor() {}

  ngOnInit(): void {}
}
