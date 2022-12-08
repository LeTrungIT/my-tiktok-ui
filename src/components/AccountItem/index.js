import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Image from '../Image';

import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} src={data.avatar} alt="Hoaaaa" />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>{`${data.first_name} ${data.last_name}`}</span>
                    {!!data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </p>

                <span className={cx('username')}>{data.nickname}</span>
            </div>
        </Link>
    );
}

export default AccountItem;
