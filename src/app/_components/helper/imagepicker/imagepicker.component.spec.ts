import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagepickerComponent } from './imagepicker.component';

describe('ImagepickerComponent', () => {
  let component: ImagepickerComponent;
  let fixture: ComponentFixture<ImagepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
