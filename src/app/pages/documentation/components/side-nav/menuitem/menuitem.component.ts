
import { WebComponent } from "@christianarchuleta/nimblejs";
import { Subsection, SubsectionComponent } from "../subsection/subsection.component";
import html from './menuitem.component.html';
import Renderer from "@christianarchuleta/nimblejs/interface/vendor/renderer/renderer.impl";

export type MenuItem = {
    text: string;
    items?: (MenuItem | Subsection)[];
    html: string;
    type: 'menu';
}

export class MenuItemComponent extends WebComponent {
    template = html;
    name = "menuitem"
    input: MenuItem;
    recursiveKeys: string[] = [];
    open = false;

    constructor(input: MenuItem) {
        super();
        this.input = input;
        this.input?.items?.forEach((item: (MenuItem | Subsection)) => {
            if (item.type === 'menu') {
                this.recursiveKeys.push(new MenuItemComponent(item).key);

            }
            if (item.type === 'subsection') {
                this.recursiveKeys.push(new SubsectionComponent(item).key);
            }
        })
    }

    onRenderSection() {
        const foundRenderableArea = document.getElementById('docsPageRenderableArea');
        const rendered = Renderer.render(this.input.html);
        if (foundRenderableArea) {
            foundRenderableArea.innerHTML = rendered;
        } else {
            console.error('Could not find docs renderable area.');
        }
    }
}