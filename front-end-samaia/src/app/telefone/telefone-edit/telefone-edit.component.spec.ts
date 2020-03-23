import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelefoneEditComponent } from './telefone-edit.component';

describe('TelefoneEditComponent', () => {
  let component: TelefoneEditComponent;
  let fixture: ComponentFixture<TelefoneEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelefoneEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelefoneEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
