import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from '@app/shared';
import { CoreModule } from '@app/core';

import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          NoopAnimationsModule,
          RouterTestingModule,
          SharedModule,
          CoreModule
        ],
        declarations: [AppComponent]
      }).compileComponents();

      fixture = TestBed.createComponent(AppComponent);
    })
  );

  beforeEach(
    async(() => {
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
    })
  );

  it(
    'should create the app',
    async(() => {
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    })
  );

  it('should increase point by 1 if button clicked', (() => {
    fixture.detectChanges();

    expect(component.points).toBe(1);

    const button = fixture.debugElement.query(By.css('.points-button'));

    // console.log('BUTTON................', button);
    // component.increasePoints();
    button.triggerEventHandler('click', null);
    // button.click();
    expect(component.points).toBe(2);
  }));
});
