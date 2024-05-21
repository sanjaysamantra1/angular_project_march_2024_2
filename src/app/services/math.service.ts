import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathService {

  constructor() { }

  sub(a: number, b: number) {
    return a - b;
  }
  mul(a: number, b: number) {
    return a * b;
  }
  div(a: number, b: number) {
    return a / b;
  }
}
