import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { SignInComponent } from '../sign-in/sign-in.component';

describe('SignInComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
              RouterTestingModule,
              MatSnackBarModule,
              HttpClientModule,
              ReactiveFormsModule,
              MatFormFieldModule,
            ],
            declarations: [
                SignInComponent
            ],
        }).compileComponents();
    });

    it('should create the component', () => {
        const fixture = TestBed.createComponent(SignInComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it(`should have as title 'Sign in'`, () => {
        const fixture = TestBed.createComponent(SignInComponent);
        const component = fixture.componentInstance;
        expect(component.submitted).toEqual(false);
      });
})