import { Outlet } from "react-router-dom";
import {Divider} from "@blueprintjs/core";


export default function AuthLayout() {
    return (
        <div className={'main_layout'}>
            <div className={'auth_slider'} style={{flex: 5}}>
                Imge slider
            </div>
            <Divider style={{margin: 0}} />
            <div className={'auth_container'} style={{flex: 4}}>
                <p>logo</p>
                <Outlet />
            </div>
        </div>
    );
}
