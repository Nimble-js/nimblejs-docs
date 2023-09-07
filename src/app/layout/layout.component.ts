import html from './layout.component.html';
import scss from './layout.component.scss'
import { AppModule } from "../app.module";
import { Component404 } from "../pages/404/404.component";
import { HomepageComponent } from "../pages/homepage/home.component";
import { AboutComponent } from "../pages/about/about.component";
import { DocumentationComponent } from "../pages/documentation/docs.component";
import { WebComponent, RouteRoot, Style } from '@christianarchuleta/nimblejs';

export class LayoutComponent extends WebComponent implements RouteRoot {

    template = html;
    styles = [new Style(scss)]
    name = "layout"

    // pages
    page404Key = new Component404().key;
    homepageKey = new HomepageComponent().key;
    aboutKey = new AboutComponent().key;
    docsKey = new DocumentationComponent().key;

    // routes
    routes = [{ url: '/404', key: this.page404Key }, { url: '/', key: this.homepageKey }, { url: '/about', key: this.aboutKey }, { url: '/docs', key: this.docsKey }]
    currentRouteKey = this.getCurrentRouteKey();

    initialize() {
        if (!this.routes.map((o: any) => o.url).includes(window.location.pathname)) {
            if (window.location.pathname.includes('nimblejs-docs')) {
                this.navigate('/')
            } else {
                console.error('Page not found, routing to 404...');
                this.navigate('/404')
            }
        }
    }

    getCurrentRouteKey() {
        return this.routes.find((r: any) => r.url === window.location.pathname)?.key
    }

    onInternalNavigate(event: any, routeRequested: string): void {
        this.currentRouteKey = this.getCurrentRouteKey();
        if (!this.routes.map((o: any) => o.url).includes(window.location.pathname)) {
            console.error('Page not found, routing to 404...');
            this.navigate('/404')
        }
    }

}