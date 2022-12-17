import classNames from 'classnames/bind';

import styles from './AccountPreview.module.scss';

import images from '~/assets/images';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img className={cx('avatar')} src={images.followAvatar} alt="follow avatar" />
                <Button className={cx('follow-btn')} primary>
                    Follow
                </Button>
            </div>

            <div className={cx('body')}>
                <h4 className={cx('nick-name')}>
                    <strong>letrantrung</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <p className={cx('name')}>Trung Lê Trần</p>
                <p className={cx('status')}>
                    <strong className={cx('number')}>9.7M </strong>
                    <span className={cx('label')}>Followes</span>
                    <strong className={cx('number')}>7.7M </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
