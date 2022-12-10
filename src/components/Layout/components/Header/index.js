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
import routesConfig from '~/components/config/routes';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                { type: 'language', code: 'en', title: 'English' },
                { type: 'language', code: 'vi', title: 'Tiếng Việt' },
                { type: 'language', code: 'en', title: 'English' },
                { type: 'language', code: 'en', title: 'English' },
                { type: 'language', code: 'en', title: 'English' },
                { type: 'language', code: 'en', title: 'English' },
                { type: 'language', code: 'en', title: 'English' },
                { type: 'language', code: 'en', title: 'English' },
                { type: 'language', code: 'en', title: 'English' },
                { type: 'language', code: 'en', title: 'English' },
                { type: 'language', code: 'en', title: 'English' },
                { type: 'language', code: 'en', title: 'English' },
                { type: 'language', code: 'en', title: 'English' },
                { type: 'language', code: 'en', title: 'English' },
                { type: 'language', code: 'en', title: 'English' },
                { type: 'language', code: 'en', title: 'English' },
                { type: 'language', code: 'en', title: 'English' },
                { type: 'language', code: 'en', title: 'English' },
                { type: 'language', code: 'en', title: 'English' },
                { type: 'language', code: 'en', title: 'English' },
            ],
        },
    },
    { icon: <FontAwesomeIcon icon={faCircleQuestion} />, title: 'Feedback and Help', to: routesConfig.feedback },
    { icon: <FontAwesomeIcon icon={faKeyboard} />, title: 'Keyboard shortcuts' },
];

function Header() {
    const currentUser = true;

    //Xu ly Logic

    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };

    const userMenu = [
        { icon: <FontAwesomeIcon icon={faUser} />, title: 'View profile', to: '/@@nguyenvana' },
        { icon: <FontAwesomeIcon icon={faCoins} />, title: 'Get coins', to: routesConfig.coins },
        { icon: <FontAwesomeIcon icon={faGear} />, title: 'Settings' },
        ...MENU_ITEMS,
        { icon: <FontAwesomeIcon icon={faSignOut} />, title: 'Log out', to: routesConfig.logout, separate: true },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={routesConfig.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="tiktok" />
                </Link>
                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy content="Upload videos" placement="bottom" delay={[0, 0]}>
                                <Button
                                    outline
                                    small
                                    className={cx('user-upload-btn')}
                                    leftIcon={<PlusIcon width="2rem" />}
                                >
                                    Upload
                                </Button>
                            </Tippy>
                            <Tippy content="Messages" placement="bottom" delay={[0, 0]}>
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                alt="Nguyen van A"
                                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/fc081faf1ffeb06b0e4095c81ed61add.jpeg?x-expires=1670274000&x-signature=%2FzxhZf0xvsZAZIfIzMsIRFVD%2Fnw%3D"
                                fallback=""
                            />
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
