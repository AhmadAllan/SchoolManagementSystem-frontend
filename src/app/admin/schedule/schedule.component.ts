import { Component, OnInit } from '@angular/core';
import { CalendarOptions, EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { ScheduleService } from '../services/schedule.service';
import { Schedule } from '../interfaces/schedule';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  showPopup: boolean = false;
  selectedOption: string = 'event';
  eventForm: Schedule = {
    name: '',
    date: '',
    startTime: '',
    endTime: '',
    publicity: 0
  };
  calendarOptions!: CalendarOptions;

  constructor(private scheduleService: ScheduleService) { }

  ngOnInit(): void {
    this.calendarOptions = {
      initialView: 'dayGridMonth',
      themeSystem: 'bootstrap',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      views: {
        timeGrid: {
          dayHeaderFormat: { weekday: 'short' } // Display shorter weekday names in timeGrid views
        }
      },
      plugins: [dayGridPlugin, timeGridPlugin], // Add dayGridPlugin and timeGridPlugin
      events: [] // Initialize with empty array
    };

    this.loadSchedules();
  }

  openPopup(): void {
    this.showPopup = true;
  }

  closePopup(): void {
    this.showPopup = false;
  }
  // TODO: there is a problem when creating the schedule
  // Http return status 500 and java back end return id to load is required for loading
  // note i testes it in the postman and i add a schedule successfuly 
  submitEventForm(): void {
    console.log('Event form submitted:', this.eventForm);
    // Call the createSchedule() method of the ScheduleService to save the new schedule
    this.scheduleService.createSchedule(this.eventForm).subscribe(
      (response) => {
        console.log('Schedule created:', response);
        this.loadSchedules(); // Reload schedules after creating a new one
        this.closePopup();
      },
      (error) => {
        console.error('Error creating schedule:', error);
      }
    );
  }

  loadSchedules(): void {
    // Call the getAllSchedules() method of the ScheduleService to fetch all schedules
    this.scheduleService.getAllSchedules().subscribe(
      (schedules) => {
        console.log('Schedules:', schedules);
        this.calendarOptions.events = this.mapSchedulesToEvents(schedules);
      },
      (error) => {
        console.error('Error fetching schedules:', error);
      }
    );
  }

  mapSchedulesToEvents(schedules: Schedule[]): EventInput[] {
    return schedules.map((schedule) => ({
      title: schedule.name,
      start: schedule.date + 'T' + schedule.startTime,
      end: schedule.date + 'T' + schedule.endTime
    }));
  }
}
