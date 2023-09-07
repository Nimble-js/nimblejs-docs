import { MenuItem } from "./menuitem/menuitem.component";
import { Subsection } from "./subsection/subsection.component";

export type SideNavType = {
    primaryMenuList: { header: string, menuItems: (MenuItem | Subsection)[] }[]
}


