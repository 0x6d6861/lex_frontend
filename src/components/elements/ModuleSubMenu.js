import {AnchorButton, Button, ButtonGroup} from "@blueprintjs/core";

export function ModuleSubMenu() {
    return (
        <ButtonGroup minimal={true}>
            <Button icon="database">Queries</Button>
            <Button icon="function">Functions</Button>
            <AnchorButton rightIcon="caret-down">Options</AnchorButton>
        </ButtonGroup>
    )
}