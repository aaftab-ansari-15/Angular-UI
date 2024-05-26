import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  contactForm!: FormGroup;
  countries: string[] = ['India', 'Canada', 'UK', 'Australia', 'USA', 'Others'];

  constructor(private fb: FormBuilder,private http: HttpClient, private contactService: ContactService) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      country: ['', Validators.required],
      message: ['', Validators.required]
    });
  }
  onSubmit(): void {
    if (this.contactForm.valid) {
      this.contactService.addContact(this.contactForm.value).subscribe(response => {
        console.log('Contact saved successfully', response);
      });
    }
  }

  // sendEmail(): void {
  //   const emailData = {
  //     to: 'admin@example.com',
  //     subject: 'New Contact Us Message',
  //     body: `Name: ${this.contactForm.value.name}\nEmail: ${this.contactForm.value.email}\nCountry: ${this.contactForm.value.country}\nMessage: ${this.contactForm.value.message}`
  //   };
  //   this.contactService.sendEmail(emailData).subscribe(response => {
  //     console.log('Email sent successfully', response);
  //   });
  // }
}
