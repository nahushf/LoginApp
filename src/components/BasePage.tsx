import * as React from 'react';
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavItem as BSNavItem } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

export interface IBasePageProps {
    history?: {
        push: (url: string) => void;
    }
}

export interface IBasePageState {

}

const NavItem = ({ children, key, to, history }) =>
    <BSNavItem eventKey={key} onClick={() => history.push(to)}>{children}</BSNavItem>

@withRouter
export class BasePage extends React.PureComponent<IBasePageProps, IBasePageState> {

    render() {
        const { history } = this.props;
        return (
            <div className="container">
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">LoginApp</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem history={history} key={1} to="/aboutus/profile">
                                Profile
                            </NavItem>
                            <NavItem history={history} key={2} to="/aboutus/team">
                                Team
                            </NavItem>
                            <NavItem history={history} key={3} to="/aboutus/contact">
                                Contact
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                {this.props.children}
            </div>
        );
    }
}
