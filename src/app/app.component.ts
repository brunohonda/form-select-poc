import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  users: any[];
  focusedUser: any = null;
  selectedUsers: any[] = [];

  ngOnInit() {
    this.users = [
      { email: 'candidato1@yopmail.com', responses: [ { question: 'Question 1?', response: 'Response 1'}, { question: 'Question 2?', response: 'Response 2'}, { question: 'Question 3?', response: 'Response 3'} ] },
      { email: 'candidato2@yopmail.com', responses: [ { question: 'Question 1?', response: 'HGJhkjf hkdfv'}, { question: 'Question 2?', response: 'f shdf bjhskgb hsfkgb'}, { question: 'Question 3?', response: 'lsd fhldfj gl'} ] },
      { email: 'candidato3@yopmail.com', responses: [ { question: 'Question 1?', response: 'f gndfghn hgn  rgh'}, { question: 'Question 2?', response: 'fhnghnmrgh mngh'}, { question: 'Question 3?', response: 'Joofg o jgb jsflg'} ] },
    ];
  }

  focusUser(user) {
    this.focusedUser = Object.assign({}, user);
  }

  toggleUser(toggledUser) {
    let originList;
    let destinationList;
    let originIndex;
    let destinationIndex;

    if (!this.userIsSelected(toggledUser)) {
      originList = this.users;
      destinationList = this.selectedUsers;
      originIndex = this.users.findIndex((user) => user.email === toggledUser.email);
      destinationIndex = this.selectedUsers.length;
    } else {
      originList = this.selectedUsers;
      destinationList = this.users;
      originIndex = this.selectedUsers.findIndex((user) => user.email === toggledUser.email);
      destinationIndex = this.users.length;
    }

    transferArrayItem(
      originList,
      destinationList,
      originIndex,
      destinationIndex
    );
  }

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer !== event.container) {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  userIsSelected(toggledUser) {
    if (this.selectedUsers.length === 0) {
      return false;
    }

    return this.selectedUsers.findIndex((selectedUser) => toggledUser.email === selectedUser.email) >= 0;
  }
}
