import { useEffect, useState } from 'react';

import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import Menu, { MenuItem } from './Menu';
import config from '~/config';
import {
    HomeActiveIcon,
    HomeIcon,
    LiveActiveIcon,
    LiveIcon,
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
                <MenuItem to={config.routes.home} title="For You" icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    to={config.routes.following}
                    title="Following"
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem to={config.routes.live} title="LIVE" icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>
            <SuggestAccounts label="Suggested Accounts" data={suggestedUsers} />
            <SuggestAccounts label="Following Accounts" data={suggestedUsers} />
        </aside>
    );
}

export default Sidebar;
