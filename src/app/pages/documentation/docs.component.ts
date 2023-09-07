import { Style, WebComponent } from 'nimblejs';
import html from './docs.component.html';
import scss from './docs.component.scss';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import Renderer from 'nimblejs/interface/vendor/renderer/renderer.impl';

export class DocumentationComponent extends WebComponent {
    name = 'docs';
    template = html;
    styles = [new Style(scss)];

    // components
    sideNavKey = new SideNavComponent().key;
}