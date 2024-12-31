import { Routes } from '@angular/router'
import { AuthLayout } from './auth/authLayout.component'
import { LoginComponent } from './auth/login/login.component'
import { RegisterComponent } from './auth/register/register.component'
import { LandingComponent } from './layouts/landing/landing.component'
import { ContentAreaComponent } from './layouts/landing/components/content-area/content-area.component'

export const routes: Routes = [
  {
    path: 'auth',
    component: AuthLayout,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ],
    // redirectTo:'login'
  },
  {
    path: '',
    component: LandingComponent,
    children: [
      { path: 'home', component: ContentAreaComponent },
      { path: '', redirectTo: 'home',pathMatch:'full' },
    ],
  },
]
