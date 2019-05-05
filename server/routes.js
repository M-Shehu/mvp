import Login from '../client/src/components/App.jsx';
import App from '../client/src/components/Login.jsx';

const routes = [
    {
        component: Login,
        path: "/",
        exact: true
    },
    {
        component: App,
        path: "/",
        exact: true
    }    
]

export default routes;
