import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCompetencesComponent } from './modal-competences.component';

describe('ModalCompetencesComponent', () => {
  let component: ModalCompetencesComponent;
  let fixture: ComponentFixture<ModalCompetencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCompetencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCompetencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
