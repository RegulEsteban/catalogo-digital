import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZapateriaComponent } from './zapateria.component';

describe('ZapateriaComponent', () => {
  let component: ZapateriaComponent;
  let fixture: ComponentFixture<ZapateriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZapateriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZapateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
