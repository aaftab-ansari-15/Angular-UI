import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Contact } from './contact.model';
// import { environment } from 'src/environments/environment';

interface Contact {
  name: string;
  email: string;
  country: string;
  message: string;
}

interface EmailRequest {
  to: string;
  subject: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'http://localhost:8080/api/contact-us/add';
  constructor(private http: HttpClient) { }

  addContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.apiUrl, contact);
  }

  sendEmail(emailRequest: EmailRequest): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/send-email`, emailRequest);
  }
}
