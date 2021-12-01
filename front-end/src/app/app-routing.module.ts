import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { SamplesComponent } from './samples/samples.component';
import { SectionComponent } from './section/section.component';

const routes: Routes = [{path:'about',component:AboutComponent},
                          {path:'samples',component:SamplesComponent},
                        {path:'contact',component:ContactComponent}
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
