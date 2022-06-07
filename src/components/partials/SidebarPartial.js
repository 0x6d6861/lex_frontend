import React from 'react';
import {SideNavigation} from "../elements/SideNavigation";
import {
    Alignment,
    Button,
    Classes, Divider,
    Menu, MenuDivider,
    MenuItem,
    Navbar,
    NavbarDivider,
    NavbarGroup,
    NavbarHeading
} from "@blueprintjs/core";
import {Classes as PopoverClasses, Popover2} from "@blueprintjs/popover2";
import {FlexedContainer} from "../elements/FlexedContainer";
export function SidebarPartial() {
    return (
        <>
            <Navbar>
                <NavbarGroup align={Alignment.LEFT}>
                    <NavbarHeading>Blueprint</NavbarHeading>
                </NavbarGroup>
            </Navbar>
            <FlexedContainer>
                <div>Law Module</div>
            </FlexedContainer>
            <SideNavigation />
        </>
    )
}
