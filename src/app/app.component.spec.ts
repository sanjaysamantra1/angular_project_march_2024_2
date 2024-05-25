import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

// Test-suite
describe('AppComponent', () => {
  beforeAll(() => { // 1
    console.log('before All')
  })
  beforeEach(async () => { // 3 times, there are 3 it()
    await TestBed.configureTestingModule({
      imports: [
        AppComponent,
      ],
    }).compileComponents();
    console.log('Before Each')
  });

  afterAll(() => { // 1
    console.log('after  All')
  })
  afterEach(() => { // 3 times, there are 3 it()
    console.log('after Each')
  })

  // spec / Test-Case
  it('should create the app', () => {
    console.log('It-1')
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'angular_project_march_2024_2' title`, () => {
    console.log('It-2')
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular_project_march_2024_2');
  });

});
