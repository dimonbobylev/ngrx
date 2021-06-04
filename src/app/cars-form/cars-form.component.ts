import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import *as moment from 'moment'
import {Car} from "../car-model";


@Component({
  selector: 'app-cars-form',
  templateUrl: './cars-form.component.html',
  styleUrls: ['./cars-form.component.css']
})
export class CarsFormComponent implements OnInit {

  private id: number = 2;
  carName = "";
  carModel = "";


  @Output() addCar: EventEmitter<Car> = new EventEmitter<Car>()


  constructor() { }

  ngOnInit(): void {
  }

  onAdd() {
    if(this.carName === " " || this.carModel === " ") return
    this.id = ++this.id;
    const car = new Car(
      this.carName,
      moment().format('DD.MM.YY'),
      this.carModel,
      false,
      this.id
    );
    this.addCar.emit(car);
    this.carModel = "";
    this.carName = "";
  }

  onLoad() {

  }
}
