import React from 'react';
//import './Main.css';

import { Register } from './Register';
import { Login } from './Login';

export class Main extends React.Component {
    render() {
        return (

            <div className="main">
                {/*<Register/>*/}
                <Login></Login>
            </div>

        )
    }
}