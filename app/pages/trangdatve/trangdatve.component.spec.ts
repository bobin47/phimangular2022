import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrangdatveComponent } from './trangdatve.component';

describe('TrangdatveComponent', () => {
  let component: TrangdatveComponent;
  let fixture: ComponentFixture<TrangdatveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrangdatveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrangdatveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
