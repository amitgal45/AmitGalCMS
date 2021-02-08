import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLogInComponent } from './_components/admin/log-in/log-in.component';
import { AdminPanelComponent } from './_components/admin/panel/panel.component';
import { AdminGetAllProductsComponent } from './_components/admin/products/get-all-products/get-all-products.component';
import { LoginComponent } from './_components/auth/login/login.component';
import { SignupComponent } from './_components/auth/signup/signup.component';
import { GetAllProductsComponent } from './_components/products/get-all-products/get-all-products.component';
import { GetSingleProductComponent } from './_components/products/get-single-product/get-single-product.component';
import { AuthGuardService } from './_services/auth.guard';
import { AdminGuardService } from './_services/admin.guard';
import { AdminGetAllUsersComponent } from './_components/admin/users/get-all-users/get-all-users.component';
import { SettingsComponent } from './_components/admin/general/settings/settings.component';
import { ForumComponent } from './_components/forum/forum/forum.component';
import { ForumPostsComponent } from './_components/forum/forum-posts/forum-posts.component';
import { ForumPostComponent } from './_components/forum/forum-post/forum-post.component';
import { AddpostComponent } from './_components/forum/addpost/addpost.component';
import { AddForumComponent } from './_components/admin/forum/add-forum/add-forum.component';
import { AddCategoryComponent } from './_components/admin/forum/add-category/add-category.component';
import { AdminHomeComponent } from './_components/admin/admin-home/admin-home.component';
import { MainComponent } from './_components/ui/main/main.component';
import { CatalogComponent } from './_components/products/catalog/catalog.component';
import { GetproductComponent } from './_components/products/getproduct/getproduct.component';
import { CartItemsComponent } from './_components/cart/cart-items/cart-items.component';
import { ArticleItemComponent } from './_components/article/article-item/article-item.component';


const routes: Routes = [
  // { path: 'leaves', loadChildren: () => import(`./leaves/leaves.module`).then(m => m.LeavesModule) },

  { path: '', component: MainComponent },
  { path: 'cart', component: CartItemsComponent,canActivate:[AuthGuardService] },
  { path: 'article/:id', component: ArticleItemComponent },
  { path: 'products/catalog/:name', component: CatalogComponent },
  { path: 'products/:id', component: GetproductComponent,canActivate:[AuthGuardService] },
  { path: 'products', component: GetAllProductsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'product/:id', component: GetSingleProductComponent },
  {
    path: 'forum', children: [
      { path: '', component: ForumComponent },
      { path: ':id', component: ForumPostsComponent,canActivate:[AuthGuardService] },
      { path: ':id/addpost', component: AddpostComponent,canActivate:[AuthGuardService] },
      { path: 'post/:id', component: ForumPostComponent }
    ]
  },
  {
    path: 'admin',
    // outlet:'admin',
    component:AdminPanelComponent,
    canActivate:[AdminGuardService],
    // canActivate: [AdminGuardService] ,
    children: [
      { path: 'login', component: AdminLogInComponent },
      { path: '', component: AdminHomeComponent,outlet:'admin' },
      { path: '', component: AdminPanelComponent },
      {
        path: 'forum',
        component:AddForumComponent,
        outlet:'admin',
      },
      {
        path: 'category',
        component: AddCategoryComponent, outlet: 'admin' },
      {
        path: 'products',component: AdminGetAllProductsComponent, outlet: 'admin'
      },
      {
        path: 'users', component: AdminGetAllUsersComponent, outlet: 'admin'
      },
      { path: 'settings', component: SettingsComponent, outlet: 'admin' },
      { path: '', redirectTo:'panel',pathMatch:'full'  }

    ]
    // loadChildren: '/_routing/admin.module#Module1Module'

  },





];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule],
  providers: [AdminGuardService]
})
export class AppRoutingModule {

}
