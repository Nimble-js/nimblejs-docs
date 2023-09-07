import { Style, WebComponent } from "nimblejs";
import html from './home.component.html';
import scss from './home.component.scss';
import { Component404 } from "../404/404.component";

export class HomepageComponent extends WebComponent {
    template = html;
    styles = [new Style(scss)]
    name = "home"

}