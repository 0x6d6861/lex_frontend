import { Link, Outlet } from "react-router-dom";
import {HeaderPartial} from "../../components/partials/HeaderPartial";

import './style.css';
import {SidebarPartial} from "../../components/partials/SidebarPartial";
import {
    Alignment,
    Button,
    Divider,
    InputGroup,
    MenuDivider,
    Navbar,
    NavbarGroup,
    NavbarHeading
} from "@blueprintjs/core";
import {SideNavigation} from "../../components/elements/SideNavigation";
import {FlexedContainer} from "../../components/elements/FlexedContainer";
import {ModuleSubMenu} from "../../components/elements/ModuleSubMenu";

export default function MainLayout() {
    return (
        <div className={'main_layout'}>
            <div>
                <SidebarPartial />
            </div>
            <Divider style={{margin: 0}} />
            <div className={'main_content_layout'}>
                <HeaderPartial />
                <div className={'main_content'}>
                    <FlexedContainer>
                        <div>
                            <h3 style={{margin: 0}} className="bp4-heading">Dashboard</h3>
                        </div>
                        <div style={{flex: 2}}>
                            <ModuleSubMenu />
                        </div>
                        <Divider />
                        <div style={{flex:1}}>
                            <InputGroup fill={true} rightElement={<Button minimal={true} icon={'arrow-right'} />} leftIcon={'search'} placeholder={'Will use omni bar'} />
                        </div>
                        <Divider />
                        <Button icon="plus" intent={'primary'} text={"Create Case"} />
                    </FlexedContainer>
                    <div className={'outlet_content'}>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
}
