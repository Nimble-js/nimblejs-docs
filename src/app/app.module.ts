import { Module, Nimble } from '@christianarchuleta/nimblejs';
import { LayoutComponent } from './layout/layout.component';
export class AppModule extends Module {


    services: any[] = [];
    components: any[] = [{ url: '*', component: LayoutComponent }];

    constructor() {
        super();
    }
}