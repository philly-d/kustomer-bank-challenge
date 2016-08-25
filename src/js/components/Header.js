import React from 'react';
import { normalizeAmount } from '../reducers/transactions';

const Header = ({ balance }) => {

    return (
        <div className="content-block">
            <div classNamze="column">
                <h2 className="ui center aligned header">
                    Welcome to Banker's Bank!
                </h2>
                <div className="ui statistic">
                    <div className="value">
                        ${ normalizeAmount(balance) }
                    </div>
                    <div className="label">Your Balance</div>
                </div>
            </div>
        </div>
    )

}

export default Header;