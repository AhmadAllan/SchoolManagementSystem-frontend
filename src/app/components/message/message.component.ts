import { Component } from '@angular/core';

interface Message {
  content: string;
  sentByUser: boolean;
  date: Date;
}

interface User {
  name: string;
  lastMessage: string;
  messages: Message[];
}


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  users: User[] = [
    {
      name: 'Ahmad',
      lastMessage: 'Hello',
      messages: [
        { content: 'Hello', sentByUser: false, date: new Date() },
        { content: 'How are you?', sentByUser: true, date: new Date() },
        { content: 'Goodbye', sentByUser: true, date: new Date() },
      ],
    },
    {
      name: 'Khild',
      lastMessage: 'Hi there!',
      messages: [
        { content: 'Hi there!', sentByUser: false, date: new Date() },
        { content: 'I\'m doing well, thanks!', sentByUser: false, date: new Date() },
        { content: 'See you later!', sentByUser: true, date: new Date() },
      ],
    },
  ];
  selectedUser: User | undefined;
  newMessage: string = '';
  searchQuery: string = '';

  selectUser(user: User): void {
    this.selectedUser = user;
  }

  sendMessage(): void {
    if (this.newMessage.trim() !== '' && this.selectedUser) {
      const message: Message = {
        content: this.newMessage,
        sentByUser: true,
        date: new Date(),
      };
      this.selectedUser.messages.push(message);
      this.selectedUser.lastMessage = this.newMessage;
      this.newMessage = '';
    }
  }

  get filteredUsers(): User[] {
    if (this.searchQuery.trim() !== '') {
      const query = this.searchQuery.toLowerCase();
      return this.users.filter((user) =>
        user.name.toLowerCase().includes(query)
      );
    }
    return this.users;
  }
}
