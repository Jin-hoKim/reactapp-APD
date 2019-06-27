import React from  'react';
import styles from './ErrorView.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const ErrorView = ({ message }) => {
    return (
        <div className={cx('error-view')}>
            <p>
                <i className="fas fa-exclamation-circle"></i>
            </p>
            Sorry, Try again..
        </div>
    )
}

export default ErrorView;
