import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { InboxIcon, MessageIcon, PlusIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';
import config from '~/config';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'Tiếng Việt',
        children: {
            title: 'Ngôn ngữ',
            data: [
                { type: 'language', code: 'en', title: 'English' },
                { type: 'language', code: 'vi', title: 'Tiếng Việt' },
                { type: 'language', code: 'en', title: 'English' },
                { type: 'language', code: 'en', title: 'English' },
                { type: 'language', code: 'en', title: 'English' },
                { type: 'language', code: 'en', title: 'English' },
                { type: 'language', code: 'en', title: 'English' },
                { type: 'language', code: 'en', title: 'English' },
            ],
        },
    },
    { icon: <FontAwesomeIcon icon={faCircleQuestion} />, title: 'Phản hồi và trợ giúp', to: config.routes.feedback },
    { icon: <FontAwesomeIcon icon={faKeyboard} />, title: 'Phím tắt trên bàn phím' },
];

function Header() {
    const currentUser = true;

    //Xu ly Logic

    const handleMenuChange = (menuItem) => {};

    const userMenu = [
        { icon: <FontAwesomeIcon icon={faUser} />, title: 'Xem hồ sơ', to: '/@@nguyenvana' },
        { icon: <FontAwesomeIcon icon={faCoins} />, title: 'Nhận xu', to: config.routes.coins },
        { icon: <FontAwesomeIcon icon={faGear} />, title: 'Cài đặt' },
        ...MENU_ITEMS,
        { icon: <FontAwesomeIcon icon={faSignOut} />, title: 'Đăng xuất', to: config.routes.logout, separate: true },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="tiktok" />
                </Link>
                <Search />

                <div className={cx('actions')}>
                    <Tippy content="Upload videos" placement="bottom" delay={[0, 0]}>
                        <Button
                            to={config.routes.upload}
                            small
                            className={cx('user-upload-btn')}
                            leftIcon={<PlusIcon width="2rem" />}
                        >
                            Tải lên
                        </Button>
                    </Tippy>
                    {currentUser ? (
                        <>
                            <Tippy content="Tin nhắn" placement="bottom" delay={[0, 0]}>
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Hộp thư" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button primary>Đăng nhập</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image className={cx('user-avatar')} alt="Nguyen van A" src={images.avatar} fallback="" />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
