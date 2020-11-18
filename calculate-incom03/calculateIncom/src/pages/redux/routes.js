// 从./containers/index.js导入
import App from 'components/app/index';
import { Calculate, Logs, IncomAnlyze } from './containers/index';

const createRoutes = {
    path: '/',
    component: App,
    indexRoute: { component: Calculate },
    childRoutes: [
        { path: 'calculate', component: Calculate },
        { path: 'logs', component: Logs },
        { path: 'incomAnlyze', component: IncomAnlyze },
    ],
};
export default createRoutes;
