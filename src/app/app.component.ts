import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { AllDevicesComponent } from './all-devices/all-devices.component';

@Component({
  selector: 'tpc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular GSAP Animations';
  completed: boolean = false;

  @ViewChild('allDevices') allDevices: AllDevicesComponent;

  /**
   *
   */
  constructor(private cdr: ChangeDetectorRef) { }

  onCompleted() {
    this.completed = true;
    this.cdr.detectChanges();
  }

  play() {
    this.completed = false;
    this.allDevices.startAnimate();
  }
}
