import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedBrandComponent } from './featured-brand.component';

describe('FeaturedBrandComponent', () => {
  let component: FeaturedBrandComponent;
  let fixture: ComponentFixture<FeaturedBrandComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeaturedBrandComponent]
    });
    fixture = TestBed.createComponent(FeaturedBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
