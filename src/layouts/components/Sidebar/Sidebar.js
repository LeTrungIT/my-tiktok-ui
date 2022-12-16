import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import Menu, { MenuItem } from './Menu';
import config from '~/config';
import { HomeIcon, LiveIcon, UserGroupIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem to={config.routes.home} title="For You" icon={<HomeIcon />} />
                <MenuItem to={config.routes.following} title="Following" icon={<UserGroupIcon />} />
                <MenuItem to={config.routes.live} title="LIVE" icon={<LiveIcon />} />
            </Menu>
        </aside>
    );
}

export default Sidebar;
