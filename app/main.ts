import { provide }    from '@angular/core';
import {HTTP_PROVIDERS, Headers} from '@angular/http';

// The usual bootstrapping imports
import { bootstrap }      from '@angular/platform-browser-dynamic';
import { AppComponent }   from './app.component';

bootstrap(AppComponent, [HTTP_PROVIDERS]);
