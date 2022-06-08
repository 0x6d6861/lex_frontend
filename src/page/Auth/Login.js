import { Link, Outlet } from "react-router-dom";
import {AnchorButton, Button, Checkbox, ControlGroup, Divider, FormGroup, InputGroup, Intent} from "@blueprintjs/core";
import {useState} from "react";
import {Tooltip2} from "@blueprintjs/popover2";


export default function Login() {

    let [showPassword, setShowPassword] = useState(false)

    const lockButton = (
        <Tooltip2 content={`${showPassword ? "Hide" : "Show"} Password`} disabled={false}>
            <Button
                disabled={false}
                icon={showPassword ? "unlock" : "lock"}
                intent={Intent.WARNING}
                minimal={true}
                onClick={() => setShowPassword(!showPassword)}
            />
        </Tooltip2>
    );

    return (
        <div>
            <h1>Login</h1>
            // add a toaster notification
            <p style={{
                marginTop: '1rem',
                marginBottom: '1rem'}}>Sign into your <strong>Lex</strong> account</p>
            <form autocomplete="off">
                <FormGroup
                    disabled={false}
                    label={"Email address"}
                    labelFor="email-input"
                >
                    <InputGroup type={'email'} id="email-input" placeholder="heri@heri.co" disabled={false} required={true}/>
                </FormGroup>

                <FormGroup
                    disabled={false}
                    label={"Password"}
                    labelFor="password-input"
                >
                    <InputGroup
                        disabled={false}
                        placeholder="password"
                        rightElement={lockButton}
                        type={showPassword ? "text" : "password"}
                        autoComplete={'off'}
                    />
                </FormGroup>
                <ControlGroup fill={true} vertical={false}>
                    <Checkbox label="Remember me" />
                    <a style={{textAlign: 'right'}} href={"#"}>Forgot password?</a>
                </ControlGroup>

                <FormGroup style={{marginTop: '1rem'}}>
                    <Button fill={true} type={'submit'} text={"Login"} intent={'primary'} />
                </FormGroup>


                <div style={{
                    marginTop: '2rem',
                    marginBottom: '2rem'}}></div>
                <p style={{
                    textAlign: 'center'
                }}>Don't have an account? <a href="#">Register for one</a></p>
            </form>
        </div>
    );
}
