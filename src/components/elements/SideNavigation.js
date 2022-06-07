import {Divider, Menu, MenuDivider, MenuItem} from "@blueprintjs/core";

export function SideNavigation() {
    return (
        <Menu large={false} >
            {/*<Divider style={{margin: 0}} />*/}
            <MenuItem icon="grid-view" text="Dashboard" />
            <MenuItem icon="briefcase" text="Cases" />
            <MenuItem icon="people" text="Lawyers" />
            <MenuItem icon="folder-close" text="Uploads" />
            <MenuDivider title={'Miscellaneous'} />
            <MenuItem icon="book" text="Appointments" />
            <MenuItem text="Settings..." icon="cog" intent="primary">
                <MenuItem icon="tick" text="Save on edit" />
                <MenuItem icon="blank" text="Compile on edit" />
            </MenuItem>
        </Menu>
    );
}
