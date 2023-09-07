import { Style, WebComponent } from '@christianarchuleta/nimblejs';
import html from './about.component.html';
import scss from "./about.component.scss";

export class AboutComponent extends WebComponent {
    template = html;
    styles = [new Style(scss)];
    name = "about"
}