import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderNoCategoryComponent } from './slider-no-category.component';

describe('SliderNoCategoryComponent', () => {
  let component: SliderNoCategoryComponent;
  let fixture: ComponentFixture<SliderNoCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderNoCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderNoCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
