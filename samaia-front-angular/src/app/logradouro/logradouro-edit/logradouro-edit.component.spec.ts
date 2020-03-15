import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogradouroEditComponent } from './logradouro-edit.component';

describe('LogradouroEditComponent', () => {
  let component: LogradouroEditComponent;
  let fixture: ComponentFixture<LogradouroEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogradouroEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogradouroEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
