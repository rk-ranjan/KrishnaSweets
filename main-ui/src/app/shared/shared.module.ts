import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { TopNotificationBarComponent } from './components/top-notification-bar/top-notification-bar.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { MainFooterComponent } from './components/main-footer/main-footer.component';
import { RkModelComponent } from './components/rk-model/rk-model.component';
import { CustomSideNavComponent } from './components/custom-side-nav/custom-side-nav.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { SecondryHeaderComponent } from './components/secondry-header/secondry-header.component';
import { CustomCarouselComponent } from './components/custom-carousel/custom-carousel.component';
import { CakeShowCaseComponent } from './components/cake-show-case/cake-show-case.component';
import { SweetShowCaseComponent } from './components/sweet-show-case/sweet-show-case.component';
import { SweetsShowCaseListComponent } from './components/sweets-show-case-list/sweets-show-case-list.component';
import { CakesShowCaseListComponent } from './components/cakes-show-case-list/cakes-show-case-list.component';
import { CarouselFooterComponent } from './components/carousel-footer/carousel-footer.component';
import { RecentlyViewedComponent } from './components/recently-viewed/recently-viewed.component';
import { GiftShowCaseComponent } from './components/gift-show-case/gift-show-case.component';
import { GiftShowCaseListComponent } from './components/gift-show-case-list/gift-show-case-list.component';
import { BestSellListComponent } from './components/best-sell-list/best-sell-list.component';
import { BestSellItemComponent } from './components/best-sell-item/best-sell-item.component';
import { FullCeleberationPackComponent } from './components/full-celeberation-pack/full-celeberation-pack.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductDescriptionComponent } from './components/product-description/product-description.component';
import { ProductDetailsSmallComponent } from './components/product-details-small/product-details-small.component';
import { MatOptionModule, MatCommonModule, MatRippleModule } from '@angular/material/core';
import { MatRadioModule, MatCheckboxModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import { CustomSidePanelComponent } from './components/custom-side-panel/custom-side-panel.component';
import { CardItemComponent } from './components/card-item/card-item.component';

@NgModule({
  declarations: [
      TopNotificationBarComponent,
      MainHeaderComponent,
      MainFooterComponent,
      RkModelComponent,
      CustomSideNavComponent,
      PageHeaderComponent,
      SecondryHeaderComponent,
      CustomCarouselComponent,
      CakeShowCaseComponent,
      SweetShowCaseComponent,
      SweetsShowCaseListComponent,
      CakesShowCaseListComponent,
      CarouselFooterComponent,
      RecentlyViewedComponent,
      GiftShowCaseComponent,
      GiftShowCaseListComponent,
      BestSellListComponent,
      BestSellItemComponent,
      FullCeleberationPackComponent,
      BreadcrumbComponent,
      ProductDetailsComponent,
      ProductDescriptionComponent,
      ProductDetailsSmallComponent,
      CustomSidePanelComponent,
      CardItemComponent
  ],
  imports: [
      CommonModule,
      SharedRoutingModule,
      MatOptionModule,
      MatCommonModule,
      MatRadioModule,
      MatCheckboxModule,
      MatButtonModule,
      MatRippleModule
  ],
  exports: [
        TopNotificationBarComponent,
        MainHeaderComponent,
        MainFooterComponent,
        RkModelComponent,
        SecondryHeaderComponent,
        PageHeaderComponent,
        CustomCarouselComponent,
        CakeShowCaseComponent,
        SweetShowCaseComponent,
        CakesShowCaseListComponent,
        SweetsShowCaseListComponent,
        CarouselFooterComponent,
        RecentlyViewedComponent,
        GiftShowCaseComponent,
        GiftShowCaseListComponent,
        BestSellListComponent,
        BestSellItemComponent,
        FullCeleberationPackComponent,
        BreadcrumbComponent,
        ProductDetailsComponent,
        ProductDetailsSmallComponent,
        CardItemComponent     
  ]

})
export class SharedModule { }
