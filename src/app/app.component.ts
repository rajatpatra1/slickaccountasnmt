import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'directive';
  num1 = null;
  num2 = null;
  num3 = null;

  setNum1(inputBox) {
    this.num1 = inputBox.value;
    this.num1 =this.num1.replace(/,/g,"");
    this.setNum3();
  }

  setNum2(inputBox) {
    this.num2 = inputBox.value;
    this.num2 =this.num2.replace(/,/g,"");
    this.setNum3();
  }

  setNum3() {
    this.num3 = Number(this.num1) + Number(this.num2);
  }
  
}
