import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalExperiencesComponent } from './modal-experiences.component';

describe('ModalExperiencesComponent', () => {
  let component: ModalExperiencesComponent;
  let fixture: ComponentFixture<ModalExperiencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalExperiencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
