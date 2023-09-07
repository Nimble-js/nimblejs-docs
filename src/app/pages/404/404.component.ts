import { Style, WebComponent } from "nimblejs";
import html from './404.component.html';
import scss from './404.component.scss';

export class Component404 extends WebComponent {

    template = html;
    styles = [new Style(scss)];
    name = "Component404";

}