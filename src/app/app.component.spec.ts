// import { TestBed } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
// import { AppComponent } from './app.component';

// describe('AppComponent', () => {
//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [
//         RouterTestingModule
//       ],
//       declarations: [
//         AppComponent
//       ],
//     }).compileComponents();
//   });

//   it('should create the app', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app).toBeTruthy();
//   });

//   it(`should have as title 'calculator'`, () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app.title).toEqual('calculator');
//   });

//   it('should render title', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     fixture.detectChanges();
//     const compiled = fixture.nativeElement;
//     expect(compiled.querySelector('.content span').textContent).toContain('calculator app is running!');
//   });
// });

import { AppComponent } from "./app.component"

describe('AppComponent', () => {
  let systemUnderTest: AppComponent;

  beforeEach(() => {
    systemUnderTest = new AppComponent();
  })


  it('should return a primary button given a number in getClass', () => {
    const num = '7'
    const result = systemUnderTest.getClass(num);
    expect(result).toEqual('btn btn-primary');
  })

  it('should return success button when given a non-number is given in getClass', () => {
    const nonNum = '+'
    const result = systemUnderTest.getClass(nonNum);
    expect(result).toEqual('btn btn-success');
  })

  it('should divide two numbers', () => {
    const num1 = 5;
    const num2 = 2;
    const result = systemUnderTest.divideTwoNumbers(num1, num2)
    expect(result).toEqual(2.5)
  })
})