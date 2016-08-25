import React from 'react';

const ProgressMessage = ({ progress, hideProgressMessage }) => {
    const { error, success } = progress;
    const type = error ? 'error' : 'success';
    const message = (error && error.message) || 'Your transaction was successful';
    return (<div className={`progress-message ui tiny message ${type}`}> 
        <i className="close icon" onClick={hideProgressMessage}></i>
        <div className="header">
            { message }
        </div>
    </div>);
};

export default ProgressMessage;