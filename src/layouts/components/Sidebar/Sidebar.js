import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import config from '~/config';
import {
    ExploreActiveIcon,
    ExploreIcon,
    HomeActiveIcon,
    HomeIcon,
    LiveActiveIcon,
    LiveIcon,
    ProfileActiveIcon,
    ProfileIcon,
    UserGroupActiveIcon,
    UserGroupIcon,
} from '~/components/Icons';
import SuggestAccounts from '~/components/SuggestAccounts';
import * as userServices from '~/services/userService';

const cx = classNames.bind(styles);

function Sidebar() {
    const [suggestedUsers, setSuggestedUsers] = useState([]);
    useEffect(() => {
        const getSuggestedUsersData = async () => {
            try {
                const data = await userServices.getSuggested({ page: 1, perPage: 5 });
                setSuggestedUsers(data);
            } catch (error) {
                console.log(error);
            }
        };
        getSuggestedUsersData();
    }, []);

    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    to={config.routes.home}
                    title="Dành cho bạn"
                    icon={<HomeIcon />}
                    activeIcon={<HomeActiveIcon />}
                />
                <MenuItem
                    to={config.routes.following}
                    title="Đang Follow"
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem
                    to={config.routes.upload}
                    title="Khám phá"
                    icon={<ExploreIcon />}
                    activeIcon={<ExploreActiveIcon />}
                />
                <MenuItem to={config.routes.live} title="LIVE" icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
                <MenuItem
                    to={config.routes.profile}
                    title="Hồ sơ"
                    icon={<ProfileIcon />}
                    activeIcon={<ProfileActiveIcon />}
                />
            </Menu>
            <SuggestAccounts label="Gợi ý tài khoản" data={suggestedUsers} />
            <SuggestAccounts label="Các tài khoản đang follow" data={suggestedUsers} />
        </aside>
    );
}

export default Sidebar;
