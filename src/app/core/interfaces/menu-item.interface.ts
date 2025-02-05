export interface MenuItem {
    label?: string;
    iconClass?: string;
    type?: "url" | "route";
    routeTo?: string;
    // subMenuItems?: MenuItem[];
}
