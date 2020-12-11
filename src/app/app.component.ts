import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'address-book';
  currentlyEditing = null;
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

  //  could add more validation
    
  onSubmit(contactData, firstValid, lastValid){
    // only validating name presence for now
    if(firstValid && lastValid){
      // increment to keep order of newest entries
      // could increase time efficiency here if needed
      this.entryCount += 1
      let newEntry = {
        fName: contactData.value.fname,
        lName: contactData.value.lname,
        address: contactData.value.address,
        email: contactData.value.email,
        phone: contactData.value.phone,
        order: this.entryCount
      };
      this.addressEntries.push(newEntry);
    } else {
      // if input invalid, show errors to user
      Object.keys(contactData.form.controls).forEach(field => {
        const control = contactData.form.get(field);
        control.markAsTouched({ onlySelf: true });
      });
    }
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

  selectToEdit(idx) {
    this.currentlyEditing = idx;
    console.log(this.currentlyEditing)
  }

  editEntry(contactData) {
    // make sure the user chose a post to edit
    if (this.currentlyEditing){
      this.deleteEntry(this.currentlyEditing)

      // create 'new' entry with same order value from before
      let newEntry = {
        fName: contactData.value.fName,
        lName: contactData.value.lName,
        address: contactData.value.address,
        email: contactData.value.email,
        phone: contactData.value.phone,
        order: this.currentlyEditing
      };

      this.addressEntries.push(newEntry)

      this.currentlyEditing = null;
      console.log(this.addressEntries)
    }
    // else should notify user to choose a post to edit
  } 
  

}
