import { Style, WebComponent } from '@christianarchuleta/nimblejs';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import html from './docs.component.html';
import scss from './docs.component.scss';

export class DocumentationComponent extends WebComponent {
    name = 'docs';
    template = html;
    styles = [new Style(scss)];

    // components
    sideNavKey = new SideNavComponent().key;
}