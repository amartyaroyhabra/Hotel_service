import { Component, OnInit } from '@angular/core';
import { HotelService } from '../app.service';
import { RoomDetailsComponent } from '../room-details/room-details.component';

@Component({
  selector: 'app-booking-status',
  templateUrl: './booking-status.component.html',
  styleUrls: ['./booking-status.component.css']
})
export class BookingStatusComponent implements OnInit {

  message!: String;
  from_date!: Date;
  to_date!: Date;
  room!: String;

  constructor(private hotelService:HotelService, private roomDetailsComponent:RoomDetailsComponent) { 
    this.room=roomDetailsComponent.room_num;
  }

  book(){
    this.hotelService.bookRoom(this.room, this.from_date, this.to_date).subscribe({
      next:(response:any)=>{
        this.message=response;
        console.log(response);
      }
    })
  }

  ngOnInit(): void {
    

  }

}
