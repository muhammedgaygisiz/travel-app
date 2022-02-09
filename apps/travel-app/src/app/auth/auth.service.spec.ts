import { TestBed } from '@angular/core/testing';
import { Auth } from '@angular/fire/auth';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: Auth,
          useValue: jest.fn(),
        },
      ],
      imports: [MatSnackBarModule],
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
