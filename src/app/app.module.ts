import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/** MODULOS */
import { PagesModule } from './pages/pages.module';

/** RUTAS */
import { APP_ROUTING } from './ap.routes';

/** COMPONENTES */
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { IncrementadorComponent } from './components/incrementador/incrementador.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    IncrementadorComponent
  ],
  imports: [
    BrowserModule,
    PagesModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
