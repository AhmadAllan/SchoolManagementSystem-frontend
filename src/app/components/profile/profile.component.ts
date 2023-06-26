import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  fullName: string = 'Ahmad Allan';
  email: string = 'aaa200265@gmail.com';
  phone: string = '0781015580';
  address: string = 'Amman< Jordan';
  city: string = 'Anytown';
  country: string = 'Country';
  emailNotifications: boolean = true;
  smsNotifications: boolean = false;

  saveProfile(): void {
    console.log('Profile information saved successfully!');
  }

  saveContactDetails(): void {
    console.log('Contact details saved successfully!');
  }

  saveNotificationPreferences(): void {
    console.log('Notification preferences saved successfully!');
  }
}
