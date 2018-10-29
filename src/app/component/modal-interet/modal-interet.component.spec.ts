import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalInteretComponent } from './modal-interet.component';

describe('ModalInteretComponent', () => {
  let component: ModalInteretComponent;
  let fixture: ComponentFixture<ModalInteretComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalInteretComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalInteretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
