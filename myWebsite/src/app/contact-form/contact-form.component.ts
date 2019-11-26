import { Component, OnInit } from "@angular/core";
import { ContactService } from "../contact.service";
import { Contact } from "../contact";

@Component({
  selector: "app-contact-form",
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.scss"],

  providers: [ContactService]
})
export class ContactFormComponent implements OnInit {
  ngOnInit() {
    this._contactsService
      .getContacts()
      .subscribe(contacts => (this.contacts = contacts));
  }
  contacts: Contact[];
  first_name: String;
  last_name: String;
  phone: String;

  constructor(private _contactsService: ContactService) {}

  addContact() {
    const newContact = {
      first_name: this.first_name,
      last_name: this.last_name,
      phone: this.phone
    };
    this._contactsService.addContact(newContact).subscribe(contact => {
      //add the contact if successfully added into DB
      this._contactsService
        .getContacts()
        .subscribe(contacts => (this.contacts = contacts));
      this.contacts.push(contact);
      this._contactsService
        .getContacts()
        .subscribe(contacts => (this.contacts = contacts));
    });
  }

  deleteContact(id) {
    this._contactsService.deleteContact(id).subscribe(data => {
      //deleting the contact from local variable, so update would be instant
      if (data.n == 1) {
        for (let i = 0; i < this.contacts.length; i++) {
          if (this.contacts[i]._id == id) {
            this.contacts.splice(i, 1);
            break;
          }
        }
      }
    });
  }
}
