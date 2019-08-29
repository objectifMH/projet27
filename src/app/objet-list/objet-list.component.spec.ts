import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjetListComponent } from './objet-list.component';

describe('ObjetListComponent', () => {
  let component: ObjetListComponent;
  let fixture: ComponentFixture<ObjetListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjetListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
