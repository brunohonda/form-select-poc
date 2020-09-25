import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  users: any[];
  focusedUser: any;
  selectedUsers: any[] = [];

  ngOnInit() {
    this.users = [
      { email: 'candidato1@yopmail.com', responses: [ { question: 'Question 1?', response: 'Response 1'}, { question: 'Question 2?', response: 'Response 2'}, { question: 'Question 3?', response: 'Response 3'} ] },
      { email: 'candidato2@yopmail.com', responses: [ { question: 'Question 1?', response: 'HGJhkjf hkdfv'}, { question: 'Question 2?', response: 'f shdf bjhskgb hsfkgb'}, { question: 'Question 3?', response: 'lsd fhldfj gl'} ] },
      { email: 'candidato3@yopmail.com', responses: [ { question: 'Question 1?', response: 'f gndfghn hgn  rgh'}, { question: 'Question 2?', response: 'fhnghnmrgh mngh'}, { question: 'Question 3?', response: 'Joofg o jgb jsflg'} ] },
    ];
  }

  selectUser(user) {
    this.selectedUsers.push(Object.assign({}, user));
  }
}
