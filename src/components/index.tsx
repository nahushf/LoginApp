import { About } from './About';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';
import { store } from '../store';
import { render } from 'react-dom';
import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/fonts/glyphicons-halflings-regular.ttf';
import './styles.css';

render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route exact path="/" component={LoginPage} />
                <Route path="/home" component={HomePage} />
                <Route exact path="/aboutus" render={() => <Redirect to="/aboutus/profile" />} />
                <Route path="/aboutus/profile" render={() => <About page="profile"/>} />
                <Route path="/aboutus/team" render={() => <About page="team"/>} />
                <Route path="/aboutus/contact" render={() => <About page="contact"/>} />
            </div>
        </BrowserRouter>
    </Provider>
    , document.getElementsByClassName('main-container')[0]
)