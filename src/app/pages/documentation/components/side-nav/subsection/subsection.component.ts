import { WebComponent } from "nimblejs";
import Renderer from "nimblejs/interface/vendor/renderer/renderer.impl";
import { MenuItem, MenuItemComponent } from "../menuitem/menuitem.component";
import html from './subsection.component.html';

export type Subsection = {
    text: string;
    items?: (MenuItem | Subsection)[];
    html: string;
    type: 'subsection';
}
export class SubsectionComponent extends WebComponent {
    template = html
    name = "subsection"
    input: Subsection;
    recursiveKeys: string[] = [];
    open = false;

    constructor(input: Subsection) {
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
        const rendered = Renderer.render(this.input.html, this, { useWith: true });
        if (foundRenderableArea) {
            foundRenderableArea.innerHTML = rendered;
        } else {
            console.error('Could not find docs renderable area.');
        }
    }
}