import { Style, WebComponent } from '@christianarchuleta/nimblejs';
import html from './home.component.html';
import scss from './home.component.scss';

export class HomepageComponent extends WebComponent {
    template = html;
    styles = [new Style(scss)]
    name = "home"

}