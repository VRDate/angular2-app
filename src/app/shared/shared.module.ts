import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core/src/metadata/ng_module";
import {PluralizePipe, TimeAgoPipe} from "./pipes";
import {GravatarComponent} from "./gravatar/gravatar.component";
import {PagerComponent} from "./pager/pager.component";
import {FollowBtnModule} from "./follow-btn/follow-btn.module";
import {FollowBtnComponent} from "./follow-btn/follow-btn.component";
import {StylesDirective} from "./directives/styles.directive";

@NgModule({
  imports: [
    CommonModule,
    FollowBtnModule,
  ],
  declarations: [
    PagerComponent,
    GravatarComponent,
    StylesDirective,

    PluralizePipe,
    TimeAgoPipe,
  ],
  exports: [
    GravatarComponent,
    PagerComponent,
    FollowBtnComponent,
    StylesDirective,

    PluralizePipe,
    TimeAgoPipe,
  ]
})
export class SharedModule {
}
