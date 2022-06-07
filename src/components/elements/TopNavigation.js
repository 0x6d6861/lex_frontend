import React from 'react';
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
import {Popover2, Classes as PopoverClasses} from "@blueprintjs/popover2";
export function TopNavigation() {
    return (
        <Navbar>
            <NavbarGroup align={Alignment.LEFT}>
                {/*<div style={{minWidth: '160px'}}>
                    <NavbarHeading>Blueprint</NavbarHeading>
                </div>
                <NavbarDivider />*/}
                <Button className={Classes.MINIMAL} icon="heatmap" text="Legal" />
                <Button className={Classes.MINIMAL} icon="briefcase" text="Human Resource" />
                <Button className={Classes.MINIMAL} icon="people" text="Tasks" />
            </NavbarGroup>
            <Navbar.Group align={Alignment.RIGHT}>
                <Popover2
                    interactionKind="click"
                    popoverClassName={PopoverClasses.POPOVER2_CONTENT_SIZING}
                    placement="bottom-end"
                    content={
                        <div>
                            list of other apps here
                        </div>
                    }
                    renderTarget={({ isOpen, ref, ...targetProps }) => (
                        <Button {...targetProps} elementRef={ref} className={Classes.MINIMAL} icon="Layout:grid" />
                    )}
                />
                <NavbarDivider />

                <Popover2
                    interactionKind="click"
                    popoverClassName={PopoverClasses.POPOVER2_CONTENT_SIZING}
                    placement="bottom-end"
                    content={
                        <div>
                            list of notifications
                        </div>
                    }
                    renderTarget={({ isOpen, ref, ...targetProps }) => (
                        <Button {...targetProps} elementRef={ref} className={Classes.MINIMAL} icon="inbox-update" />
                    )}
                />
                <NavbarDivider />
                <Popover2
                    interactionKind="click"
                    placement="bottom-end"
                    content={
                        <Menu>
                            <MenuItem icon="person" text="Profile" />
                            <MenuItem icon="key" text="Integration" />
                            <MenuItem icon="settings" text="Settings" />
                            <MenuDivider />
                            <MenuItem icon="lock" text="Logout" intent={'danger'}/>
                        </Menu>
                    }
                    renderTarget={({ isOpen, ref, ...targetProps }) => (
                        <Button {...targetProps} elementRef={ref} className={Classes.MINIMAL} icon="user" text={'Heri Agape'} />
                    )}
                />
            </Navbar.Group>
        </Navbar>
    )
}
