import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelefoneAddComponent } from './telefone-add.component';

describe('TelefoneAddComponent', () => {
  let component: TelefoneAddComponent;
  let fixture: ComponentFixture<TelefoneAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelefoneAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelefoneAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
