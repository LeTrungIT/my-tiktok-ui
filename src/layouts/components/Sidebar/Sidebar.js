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

const cx = classNames.bind(styles);

function Sidebar() {
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
            <SuggestAccounts label="Suggested Accounts" />
            <SuggestAccounts label="Following Accounts" />
        </aside>
    );
}

export default Sidebar;
