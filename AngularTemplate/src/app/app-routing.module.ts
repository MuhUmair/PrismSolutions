import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Homepage1Component } from './components/pages/homepage1/homepage1.component';
import { Homepage2Component } from './components/pages/homepage2/homepage2.component';
import { Homepage3Component } from './components/pages/homepage3/homepage3.component';
import { AboutusComponent } from './components/pages/aboutus/aboutus.component';
import { TeamComponent } from './components/pages/team/team.component';
import { TeamDetailsComponent } from './components/pages/team-details/team-details.component';
import { CareerComponent } from './components/pages/career/career.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { Service1Component } from './components/pages/service1/service1.component';
import { Service2Component } from './components/pages/service2/service2.component';
import { ServiceDetailComponent } from './components/pages/service-detail/service-detail.component';
import { BlogStandardComponent } from './components/pages/blog-standard/blog-standard.component';
import { BlogGridComponent } from './components/pages/blog-grid/blog-grid.component';
import { BlogDetailComponent } from './components/pages/blog-detail/blog-detail.component';
import { Portfolio1Component } from './components/pages/portfolio1/portfolio1.component';
import { Portfolio2Component } from './components/pages/portfolio2/portfolio2.component';
import { PortfolioDetailComponent } from './components/pages/portfolio-detail/portfolio-detail.component';
import { ShopComponent } from './components/pages/shop/shop.component';
import { ShopDetailComponent } from './components/pages/shop-detail/shop-detail.component';
import { ContactusComponent } from './components/pages/contactus/contactus.component';
import { IntegrationComponent } from './components/pages/integrations/integrations.component';
import { MigrationsComponent } from './components/pages/migrations/migrations.component';
import { DocumentsComponent } from './components/pages/documents/documents.component';
import { CasestudiesComponent } from './components/pages/casestudies/casestudies.component';
import { Portfolio3Component } from './components/pages/portfolio3/portfolio3.component';
import { Portfolio4Component } from './components/pages/portfolio4/portfolio4.component';
import { Portfolio5Component } from './components/pages/portfolio5/portfolio5.component';
import { Portfolio6Component } from './components/pages/portfolio6/portfolio6.component';
import { WebFormComponent } from './components/pages/web-form/web-form.component';
import { CasestudyComponent } from './components/pages/casestudy/casestudy.component';
import { CaseStudy3Component } from './components/pages/case-study3/case-study3.component';
import { ThankYouComponent } from './components/pages/thank-you/thank-you.component';

const routes: Routes = [

{path: '', component: Homepage2Component},
{path: 'homepage2', component: Homepage1Component},
{path: 'homepage3', component: Homepage3Component},
{path: 'about-us', component: AboutusComponent},
{path: 'team', component: TeamComponent},
{path: 'team-detail', component: TeamDetailsComponent},
{path: 'career', component: CareerComponent},
{path: 'consulting-services', component: FaqComponent},
{path: 'service-one', component: Service1Component},
{path: 'salesforce-services', component: Service2Component},
{path: 'resource-center', component: ServiceDetailComponent},
{path: 'project-management', component: BlogStandardComponent},
{path: 'implementation', component: BlogGridComponent},
{path: 'blog-detail', component: BlogDetailComponent},
{path: 'portfolio', component: Portfolio1Component},
{path: 'sales-cloud', component: Portfolio2Component},
{path: 'salesforce-communitites', component: PortfolioDetailComponent},
{path: 'clients', component: ShopComponent},
{path: 'shop-detail', component: ShopDetailComponent},
{path: 'contact-us', component: ContactusComponent},
{path: 'integration', component: IntegrationComponent},
{path: 'migration', component: MigrationsComponent},
{path: 'document-automate', component: DocumentsComponent},
{path: 'case-study', component: CasestudiesComponent},
{path: 'marketing-cloud', component: Portfolio3Component},
{path: 'salesforce-integration', component: Portfolio4Component},
{path: 'salesforce-appexchange', component: Portfolio5Component},
{path: 'salesforce-consulting', component: Portfolio6Component},
{path: 'web-form', component: WebFormComponent},
{path: 'case-study2', component: CasestudyComponent},
{path: 'case-study3', component: CaseStudy3Component},
{path: 'greeting', component: ThankYouComponent}, 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
