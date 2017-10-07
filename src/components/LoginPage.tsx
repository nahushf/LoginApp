import { ILoginData } from '../interfaces';
import { login } from '../utils';
import * as React from 'react';
import { Control, Form, Errors, actions } from 'react-redux-form';
import { Grid, Col, Row, Glyphicon } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

export interface ILoginPageProps {
    history: {
        push: (url: string) => void
    }
}

export interface ILoginPageState {
    error: string
}

export class LoginPageImpl extends React.PureComponent<ILoginPageProps, ILoginPageState> {

    constructor() {
        super();
        this.state = { error: '' };
    }

    setError = (error: string) => {
        this.setState({ error });
    }

    handleSubmit = async ({ email, password }: ILoginData, e) => {
        try {
            await login(email, password);
            this.props.history.push('/home')
        } catch (e) {
            console.log(e)
            this.setError(e);
        }
    }

    renderError = () => {
        const { error } = this.state;
        if (!error) {
            return;
        }
        return <div className="error">
            <Glyphicon glyph="exclamation" />
            {error}
        </div>;
    }

    render() {
        const { handleSubmit, renderError } = this;
        return (
            <Grid className="login-page">
                <Row>
                    <Col sm={4} smOffset={4}>
                        <Form model="forms.login" onSubmit={handleSubmit}>
                            <h2>LoginApp</h2>
                            {renderError()}
                            <Control.text model=".email" type="email" />
                            <Control.text model=".password" type="password" />
                            <button type="submit">Login Nicely!</button>
                        </Form>
                    </Col>
                </Row>
            </Grid>
        )
    }

}

export const LoginPage = withRouter(LoginPageImpl);
