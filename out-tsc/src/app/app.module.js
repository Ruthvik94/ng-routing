import { __decorate } from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient } from '@angular/common/http';
/* import { SignupFormComponent } from './signup-form/signup-form.component';
import { TitleCase } from './titlecase/titlecase.pipe';
import { TitleCaseComponent } from './titlecase/titlecase.component';
import { StartComponent } from './star/star.component';
import { SummaryPipe } from './summary/summary.pipe';
import { PipeComponent } from './pipe.component';
import { CoursesService } from './courses.service';
import { FavouriteComponent } from './favourite/favourite.component';
import { LikeComponent } from './like/like.component';
import { FormatDirective } from './format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CreatorFormComponent } from './creator-form/creator-form.component';
import { PasswordComponent } from './password/password.component';
import { CourseComponent } from './courses.component'; */
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            FormsModule,
            ReactiveFormsModule,
            HttpClient
        ],
        providers: [ //CoursesService
        ],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map