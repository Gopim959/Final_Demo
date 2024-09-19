import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';




export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),provideAnimationsAsync(),
    importProvidersFrom([BrowserAnimationsModule]),provideToastr(), provideAnimationsAsync()]

};
