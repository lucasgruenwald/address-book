import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'address-book';

  addressEntries = [
    { fName: "John", lName: "Doe", address: "123 Main Street", 
      email: "JohnDoe@gmail.com", phone: "123-456-7890"},
    { fName: "Jane", lName: "Brown", address: "123 Main Street", 
    email: "JaneDoe@yahoo.com", phone: "123-456-7891"},
  ]
    
  // addEntry(name, address, email, phone){

  // }

  // validateEmail(){

  // }

  // validatePhone(){

  // }

}
