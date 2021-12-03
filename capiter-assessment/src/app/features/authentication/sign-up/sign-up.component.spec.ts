import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { SignUpComponent } from '../sign-up/sign-up.component';

describe('SignUpComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
              BrowserAnimationsModule,
              RouterTestingModule,
              MatSnackBarModule,
              HttpClientModule,
              ReactiveFormsModule,
              MatFormFieldModule,
              MatInputModule,
            ],
            declarations: [
                SignUpComponent
            ],
        }).compileComponents();
    });

    it('should create the component', () => {
        const fixture = TestBed.createComponent(SignUpComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it(`should have as title 'Sign up'`, () => {
        const fixture = TestBed.createComponent(SignUpComponent);
        const component = fixture.componentInstance;
        expect(component.submitted).toEqual(false);
    });
    it('should render title', () => {
        const fixture = TestBed.createComponent(SignUpComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('div h2')?.textContent)
            .toContain('Sign up');
    });
})