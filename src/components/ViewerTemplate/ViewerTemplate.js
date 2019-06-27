import React from 'react';
import styles from './ViewerTEmplate.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const ViewerTemplate = ({ viewer, spaceNavigator }) => {
    return(
        <div className={cx('viewer-template')}>
            <header>
                <span>
                    <i className="fas fa-user-astronaut"></i>
                </span>
                Astronomy Picture of the Day
            </header>
            <div className={cx('viewer-wrapper')}>
                {viewer}
                <div className={cx('space-navigator-wrapper')}>
                    {spaceNavigator}
                </div>
                
            </div>
        </div>
    )
};

export default ViewerTemplate;

