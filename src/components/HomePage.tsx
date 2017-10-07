import { BasePage } from './BasePage';
import * as React from 'react';
import '../assets/welcome.gif';

export interface IHomePageProps {

}

export interface IHomePageState {

}

export class HomePage extends React.PureComponent<IHomePageProps, IHomePageState> {

    render() {
        return (
            <BasePage>
                <div className="home">
                    <h1>Welcome to this simple login app</h1>
                    <h4>This app will log you in real nice!</h4>
                    <img src="./images/welcome.gif" />
                </div>
            </BasePage>
        );
    }
}
