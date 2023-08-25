import React from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
import styles from './CheckBox.module.css';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);





function CheckBox({children, checked, ...rest}) {
  return (
    <div className={cx('checkbox')}>
      <label>
        <input type='checkbox' checked={checked} {...rest} />
        <div className={cx('icon')}>
          { checked ? (
            <MdCheckBox className={cx('checked')}/>
          ) : (
          <MdCheckBoxOutlineBlank />
          )}
        </div>
      </label>
      <span className={styles['test-1']}>{children}</span>
      <span className={styles['test-1']}>{children}</span>
    </div>
  )
};

export default CheckBox;