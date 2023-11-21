import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibGhrComponent } from './lib-ghr.component';

describe('LibGhrComponent', () => {
  let component: LibGhrComponent;
  let fixture: ComponentFixture<LibGhrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibGhrComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LibGhrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
