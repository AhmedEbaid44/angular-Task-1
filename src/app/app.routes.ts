import { Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  {path:"" , redirectTo:"start" , pathMatch:"full" },
  {path:"start" , component:StartComponent},
  {path:"about" , component:AboutComponent},
  {path:"portfolio" , component:PortfolioComponent},
  {path:"contact" , component:ContactComponent}
];
