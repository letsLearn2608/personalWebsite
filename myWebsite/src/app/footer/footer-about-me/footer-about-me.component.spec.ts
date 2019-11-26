import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterAboutMeComponent } from './footer-about-me.component';

describe('FooterAboutMeComponent', () => {
  let component: FooterAboutMeComponent;
  let fixture: ComponentFixture<FooterAboutMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterAboutMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterAboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
