import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'

@Component({
  imports: [RouterOutlet],
  template: ` <div class="flex w-full h-screen items-center justify-center">
    <div class="h-1/2 flex items-center  shadow-md">
      <div class="w-[30rem] bg-slate-500 bg-[url('/bg.jpg')] h-full "></div>
      <router-outlet />
    </div>
  </div>`,
})
export class AuthLayout {}
