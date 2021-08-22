import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  email:string;
  password:string;
}

logInUser() {
  if(this.email="abc@gmail.com" && this.password="1234"){
    console.log("login successfull");
  }
  else {
    console.log("login unsuccessfull");
  }
}




export class AppComponent implements OnInit {

  formgroup :FormGroup;
  constructor() {}
  ngOnInit() {}


}