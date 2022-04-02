import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable()
export class TimerService {
  private timer: any;
  private counter = 0;

  constructor( public logger: LoggerService) { 
    this.logger.add("TimerService Contructed");
  }

  start(ms:number){
    if(!this.timer){
      this.counter = 0;
      this.timer = setInterval(()=>{
        this.counter++;
      }, ms)
    }
  }
  stop(){
    if(this.timer){
      clearInterval(this.timer);
      this.timer = null;
    }
  }
  getCount(){
    return this.counter;
}
}