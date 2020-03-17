import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-randomcolor',
  templateUrl: './randomcolor.component.html',
  styleUrls: ['./randomcolor.component.css']
})
export class RandomcolorComponent implements OnInit {

  public gradient_background_color;
  public deg=-25;
  fill_color_A= 5;
  fill_color_B= 10;

  background_color = "red";

  constructor() { }

  ngOnInit() {
  }
  public getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//function to set a new random color
setColor() {
//background: linear-gradient(angle, color-stop1, color-stop2);

  this.deg = Math.floor(Math.random() * 360);
  this.fill_color_A = Math.floor(Math.random() * 100);
  this.fill_color_B = Math.floor(Math.random() * 100);

  this.gradient_background_color = `linear-gradient(
  ${this.deg + 'deg'},
  ${this.getRandomColor()} ${this.fill_color_A}%,
  ${this.getRandomColor()} ${this.fill_color_B}%)`;
}
}
