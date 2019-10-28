import {Reservation} from './Reservation'

export class Reserve implements Reservation{
  protected code : string;
  protected dow : string;
  constructor(code, dow){
    this.code = code;
    this.dow = dow;
  }
  getDowBooking(): string{
    return `${this.dow}`;
  }
  getCodeBooking(): string{
    return `${this.code}`;
  }
  toString():string{
    return `Booking# ${this.getCodeBooking()} for ${this.getDowBooking()}`;
  }
  
}