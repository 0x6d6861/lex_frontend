import { Link, Outlet } from "react-router-dom";
import {HeaderPartial} from "../../components/partials/HeaderPartial";

import './style.css';
import {SidebarPartial} from "../../components/partials/SidebarPartial";
import {Alignment, Divider, Navbar, NavbarGroup, NavbarHeading} from "@blueprintjs/core";
import {SideNavigation} from "../../components/elements/SideNavigation";
import {FlexedContainer} from "../../components/elements/FlexedContainer";

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
                        <div>top</div>
                    </FlexedContainer>
                    <div className={'outlet_content'}>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
}
