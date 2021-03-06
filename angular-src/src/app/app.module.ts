import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule, Routes } from "@angular/router";
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
// import { PopoverModule } from 'ng2-popover';

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { HomeComponent } from "./components/home/home.component";
import { FeedComponent } from "./components/feed/feed.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { PostComponent } from "./components/post/post.component";

import { ValidateService } from "./services/validate.service";
import { AuthService } from "./services/auth.service";
import { StoryService } from "./services/story.service";
import { MainService } from "./services/main.service";

import { FlashMessagesModule } from "angular2-flash-messages";
import { AuthGuard } from "./guards/auth.guard";
import { SidebarComponent } from "./components/sidebar/sidebar.component";

import { TagsComponent } from "./components/tags/tags.component";
import { StoryComponent } from "./components/story/story.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  {
    path: "profile/:nickname",
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  { path: "post", component: PostComponent, canActivate: [AuthGuard] }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    FeedComponent,
    ProfileComponent,
    SidebarComponent,
    PostComponent,
    TagsComponent,
    StoryComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot(),
    FroalaEditorModule.forRoot(), 
    FroalaViewModule.forRoot()
    // PopoverModule
  ],
  providers: [
    ValidateService,
    AuthService,
    StoryService,
    MainService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
