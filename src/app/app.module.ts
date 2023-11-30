import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ActivePostsComponent } from './components/active-posts/active-posts.component';
import { InactivePostsComponent } from './components/inactive-posts/inactive-posts.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { DettagliComponent } from './components/dettagli/dettagli.component';
import { UsersComponent } from './components/users/users.component';
import { UsersInfoComponent } from './components/users-info/users-info.component';

const routes: Route[] = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'activePosts',
        component: ActivePostsComponent,
    },
    {
        path: 'inactivePosts',
        component: InactivePostsComponent,
       
    },
    {
        path: 'user',
        component: UsersComponent,
        children: [
            {
                path: ':id',
                component: UsersInfoComponent
            }
        ]
       
    },
    {
        path:'activePosts/:id',
        component: DettagliComponent
    },
    {
        path:'inactivePosts/:id',
        component: DettagliComponent
    },
    {
        path: '**',
        redirectTo: '',
    }
]

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ActivePostsComponent,
        InactivePostsComponent,
        NavbarComponent,
        PostCardComponent,
        DettagliComponent,
        UsersComponent,
        UsersInfoComponent
    ],
    imports: [BrowserModule, RouterModule.forRoot(routes)],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
