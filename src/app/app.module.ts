import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetAllProductsComponent } from './_components/products/get-all-products/get-all-products.component';
import { ProductsService } from './_services/products.service';
import { AuthService } from './_services/auth.service';
import { UsersService } from './_services/users.service';
import { GeneralService } from './_services/general.service';
import { ForumService } from './_services/forum.service';
import { AdminService } from './_services/admin.service';

import { ModalService } from './_services/modal.service';


import {AuthGuardService} from './_services/auth.guard'
import {AdminGuardService} from './_services/admin.guard'



import { LoginComponent } from './_components/auth/login/login.component';
import { HeaderComponent } from './_components/ui/header/header.component';
import { SignupComponent } from './_components/auth/signup/signup.component';
import { LimitPipe } from './_pipes/products/limit.pipe';
import { GetSingleProductComponent } from './_components/products/get-single-product/get-single-product.component';
import { AdminLogInComponent } from './_components/admin/log-in/log-in.component';
import { AdminPanelComponent } from './_components/admin/panel/panel.component';
import {AdminGetAllProductsComponent} from './_components/admin/products/get-all-products/get-all-products.component'
import { JwtModule } from '@auth0/angular-jwt';
import { AddProductComponent } from './_components/admin/products/add-product/add-product.component';
import { AdminGetAllUsersComponent } from './_components/admin/users/get-all-users/get-all-users.component';
import { AddUserComponent } from './_components/admin/users/add-user/add-user.component';
import { SettingsComponent } from './_components/admin/general/settings/settings.component';
import { ForumComponent } from './_components/forum/forum/forum.component';
import { SortForumsByCategoryPipe } from './_pipes/forum/sort-forums-by-category.pipe';
import { ForumPostsComponent } from './_components/forum/forum-posts/forum-posts.component';
import { ForumPostComponent } from './_components/forum/forum-post/forum-post.component';
import { PostCommentComponent } from './_components/forum/post-comment/post-comment.component';
import { ModalComponent } from './_components/dialog/jw-modal/jw-modal.component';
import { AddpostComponent } from './_components/forum/addpost/addpost.component';
import { AddForumComponent } from './_components/admin/forum/add-forum/add-forum.component';
import { AddCategoryComponent } from './_components/admin/forum/add-category/add-category.component';
import { AdminHomeComponent } from './_components/admin/admin-home/admin-home.component';
import { MainComponent } from './_components/ui/main/main.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { SliderComponent } from './_components/products/slider/slider.component';
import { ScrollSlideshowItemComponent } from './_components/scroll-slideshow-item/scroll-slideshow-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './_components/ui/footer/footer.component';
import { CatalogComponent } from './_components/products/catalog/catalog.component';
import { JwPaginationModule } from 'jw-angular-pagination';
import { PaginationComponent } from './_components/products/pagination/pagination.component';
import { GetproductComponent } from './_components/products/getproduct/getproduct.component';
import { ImagepickerComponent } from './_components/helper/imagepicker/imagepicker.component';
import { ColorsComponent } from './_components/helper/colors/colors.component';
import { CartItemsComponent } from './_components/cart/cart-items/cart-items.component';
import { RatingComponent } from './_components/helper/rating/rating.component';
import { IsStuckPipe } from './_pipes/forum/is-stuck.pipe';
import { TopPostsComponent } from './_components/forum/helper/top-posts/top-posts.component';
import { TopUsersComponent } from './_components/forum/helper/top-users/top-users.component';
import { SliderNoCategoryComponent } from './_components/helper/slider-no-category/slider-no-category.component';


export function tokenGetter() {
  return localStorage.getItem("access_token");
}

@NgModule({
  declarations: [
    AppComponent,
    GetAllProductsComponent,
    LoginComponent,
    HeaderComponent,
    SignupComponent,
    LimitPipe,
    GetSingleProductComponent,
    AdminLogInComponent,
    AdminPanelComponent,
    AdminGetAllProductsComponent,
    AddProductComponent,
    AdminGetAllUsersComponent,
    AddUserComponent,
    SettingsComponent,
    ForumComponent,
    SortForumsByCategoryPipe,
    ForumPostsComponent,
    ForumPostComponent,
    PostCommentComponent,
    ModalComponent,
    AddpostComponent,
    AddForumComponent,
    AddCategoryComponent,
    AdminHomeComponent,
    MainComponent,
    SliderComponent,
    ScrollSlideshowItemComponent,
    FooterComponent,
    CatalogComponent,
    PaginationComponent,
    GetproductComponent,
    ImagepickerComponent,
    ColorsComponent,
    CartItemsComponent,
    RatingComponent,
    IsStuckPipe,
    TopPostsComponent,
    TopUsersComponent,
    SliderNoCategoryComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgImageSliderModule,
    ReactiveFormsModule,
    JwPaginationModule,
    CommonModule,
    JwtModule.forRoot({
      config: {
       tokenGetter: tokenGetter,
      allowedDomains: ["localhost:3001", "foo.com", "bar.com"]
      },
    }),
    BrowserAnimationsModule
  ],
  providers: [ProductsService,AuthService,AuthGuardService,
    AdminGuardService,UsersService,Title,GeneralService,
    ForumService,ModalService,AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
