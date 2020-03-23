import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogradouroListComponent } from './logradouro-list.component';

describe('LogradouroListComponent', () => {
  let component: LogradouroListComponent;
  let fixture: ComponentFixture<LogradouroListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogradouroListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogradouroListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
