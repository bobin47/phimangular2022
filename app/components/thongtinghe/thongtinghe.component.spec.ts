import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongtingheComponent } from './thongtinghe.component';

describe('ThongtingheComponent', () => {
  let component: ThongtingheComponent;
  let fixture: ComponentFixture<ThongtingheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThongtingheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThongtingheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
