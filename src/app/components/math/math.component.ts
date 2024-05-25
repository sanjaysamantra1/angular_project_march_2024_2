import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { MathService } from '../../services/math.service';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-math',
  standalone: true,
  imports: [HttpClientModule,MatDialogModule],
  templateUrl: './math.component.html',
  styleUrl: './math.component.css'
})
export class MathComponent {
  constructor(private http: HttpClientModule, private math: MathService) {
  }
  add(a: number, b: number) {
    return a + b;
  }
  sub(a: number, b: number) {
    return this.math.sub(a, b);
  }
  isEven(n: number) {
    if (n % 2 == 0) {
      return true;
    } else {
      return false;
    }
  }
  sumOfArrayElements(arr: number[]) {
    let sum = 0;
    for (let ele of arr) {
      sum = sum + ele;
    }
    return sum;
  }

}
