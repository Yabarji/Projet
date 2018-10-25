import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDirectiveComponent } from './custom-directive.component';
import {RouterTestingModule} from '@angular/router/testing';
import {BrowserDynamicTestingModule} from '@angular/platform-browser-dynamic/testing';
import {HighlightDirective} from '../../directive/highlight/highlight.directive';

describe('CustomDirectiveComponent', () => {
  let component: CustomDirectiveComponent;
  let fixture: ComponentFixture<CustomDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomDirectiveComponent , HighlightDirective ],


    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
