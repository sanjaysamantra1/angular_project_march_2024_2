import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathComponent } from './math.component';

describe('MathComponent', () => {
  let component: MathComponent;
  let fixture: ComponentFixture<MathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MathComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test add() method', () => {
    expect(component.add(2, 3)).toBe(5);
    expect(component.add(2, -3)).toBe(-1);
    expect(component.add(-2, 3)).toBe(1);
    expect(component.add(-2, -3)).toBe(-5);
  });
  it('should test sub() method', () => {
    expect(component.sub(2, 3)).toBe(-1);
  });

  it('Should test isEven() method', () => {
    expect(component.isEven(4)).toBe(true)
    expect(component.isEven(5)).toBe(false)
  });

  it('Should test sumOfArrayElements() method', () => {
    const arr1 = [10, 20, 30]
    expect(component.sumOfArrayElements(arr1)).toBe(60);
  })
});
