import { fn } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'address-book';

  entryCount = 3;

  addressEntries = [
    { fName: "John", lName: "Doe", address: "123 Main Street", 
      email: "JohnDoe@gmail.com", phone: "123-456-7890", order: 1
    },
    { fName: "Jane", lName: "Brown", address: "123 Main Street", 
    email: "JaneBrown@yahoo.com", phone: "123-456-7891", order: 2
    },
    {fName: "Bob", lName: "Smith", address: "567 89th Street",
        email: "BobSmith@aol.com", phone: "456-789-0123", order: 3
    },
  ]
    
  addEntry(fNameEntry, lNameEntry, addressEntry, emailEntry, phoneEntry){

    // could add validation of input data

    // increment to keep order of newest entries
    this.entryCount += 1

    let newEntry = {  
      fName: fNameEntry,
      lName: lNameEntry,
      address: addressEntry,
      email: emailEntry,
      phone: phoneEntry,
      order: this.entryCount
    }

    this.addressEntries.push(newEntry)
  }

  sortByLastName(direction){
    if (direction === "asc"){
      this.addressEntries = this.addressEntries.sort((a, b) =>
      (a.lName.toLowerCase() > b.lName.toLowerCase()) ? 1 : -1);
    } else if (direction === "desc"){
      this.addressEntries = this.addressEntries.sort((a, b) =>
      (a.lName.toLowerCase() > b.lName.toLowerCase()) ? -1 : 1);
    }
  }

  sortByFirstName(direction) {
    if (direction === "asc") {
      this.addressEntries = this.addressEntries.sort((a, b) =>
        (a.fName.toLowerCase() > b.fName.toLowerCase()) ? 1 : -1);
    } else if (direction === "desc") {
      this.addressEntries = this.addressEntries.sort((a, b) =>
        (a.fName.toLowerCase() > b.fName.toLowerCase()) ? -1 : 1);
    }
  }

  sortByAge(direction){
    if (direction === "newest"){
      this.addressEntries = this.addressEntries.sort((a,b) => 
      (a.order > b.order) ? -1 : 1);
    } else if (direction === "oldest"){
      this.addressEntries = this.addressEntries.sort((a, b) =>
      (a.order > b.order) ? 1 : -1);
    }
  }

  // could add popup confirmation before executing deletion
  deleteEntry(idx){
    this.addressEntries = this.addressEntries.filter( ele => ele.order !== idx)
  }

}
