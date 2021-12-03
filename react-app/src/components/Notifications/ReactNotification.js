import React from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

const ReactNotificationComponent = ({ title, body }) => {
    let hideNotif = title === '';

    console.log('title => ', title, hideNotif);
    if (!hideNotif) {
        console.log('inside if');
        toast.info(<Display />, { toastId: '.' });
    }

    function Display() {
        console.log('Diplay');
        return (
            <>
                <div>
                    <h4>{title}</h4>
                    <p>{body}</p>
                </div>
            </>
        );
    }

    return <></>;
};

ReactNotificationComponent.defaultProps = {
    title: 'This is title',
    body: 'Some body',
};

ReactNotificationComponent.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string,
};

export default ReactNotificationComponent;
