import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import { HeaderOnlyLayout } from '~/components/Layout';
import routesConfig from '~/components/config/routes';

const publicRoutes = [
    {
        path: routesConfig.home,
        component: Home,
    },
    {
        path: routesConfig.following,
        component: Following,
    },
    {
        path: routesConfig.profile,
        component: Profile,
    },
    {
        path: routesConfig.upload,
        component: Upload,
        layout: HeaderOnlyLayout,
    },
    {
        path: routesConfig.search,
        component: Search,
        layout: null,
    },
    {
        path: routesConfig.feedback,
        component: Search,
        layout: null,
    },
    {
        path: routesConfig.coin,
        component: Search,
        layout: null,
    },
    {
        path: routesConfig.logout,
        component: Search,
    },
];
const privateRoutes = {};
export { publicRoutes, privateRoutes };
