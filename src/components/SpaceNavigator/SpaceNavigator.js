import React from 'react';
import styles from './SpaceNavigator.scss';
import classNames from 'classnames/bind';
// import LeftIcon from 'react-icons/lib/md/chevron-left';
// import RightIcon from 'react-icons/lib/md/chevron-right';

const cx = classNames.bind(styles);

const SpaceNavigator = ({ isError, onPrev, onNext }) => {
  return (
    <div className={cx('space-navigator')}>
      <div className={cx('left', 'end')}
        onClick={onPrev}>
        {
          isError === true ?
          (
            <div />
          )
          :
          (
            <div className={cx('circle')}>
              <i className="fas fa-chevron-left"></i>
            </div>
          )
        }
      </div>
      <div className={cx('right', 'end')}
        onClick={onNext}>
      {
        isError === true ?
        (
          <div/>
        )
        :
        (
          <div className={cx('circle')}>
            <i className="fas fa-chevron-right"></i>
          </div>
        )
      }
      </div>
    </div>
  );
};

export default SpaceNavigator;
