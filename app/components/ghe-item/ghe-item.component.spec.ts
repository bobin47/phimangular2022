import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GheItemComponent } from './ghe-item.component';

describe('GheItemComponent', () => {
  let component: GheItemComponent;
  let fixture: ComponentFixture<GheItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GheItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GheItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
