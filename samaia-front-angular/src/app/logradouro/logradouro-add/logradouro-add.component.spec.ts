import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogradouroAddComponent } from './logradouro-add.component';

describe('LogradouroAddComponent', () => {
  let component: LogradouroAddComponent;
  let fixture: ComponentFixture<LogradouroAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogradouroAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogradouroAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
