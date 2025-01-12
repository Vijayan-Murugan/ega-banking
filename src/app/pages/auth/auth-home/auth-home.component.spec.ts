import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthHomeComponent } from './auth-home.component';

describe('AuthHomeComponent', () => {
  let component: AuthHomeComponent;
  let fixture: ComponentFixture<AuthHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
