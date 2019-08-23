import SignUpPage from '../pages/Authentication/SignUp.jsx';
import SignInPage from '../pages/Authentication/SignIn.jsx';
import LandingPage from '../pages/Landing.jsx';
import AccountPage from '../pages/Account.jsx';
import HomePage from '../pages/Home.jsx';
import PasswordForgetPage from '../pages/Authentication/PasswordForget.jsx';
import SprisePage from '../pages/Sprise.jsx';
import * as ROUTES from './routes.js';
import InstaSprisePage from '../pages/InstaSprise.jsx';

const routes = [
  {
    component: LandingPage,
    path: ROUTES.LANDING,
    exact: true
  },
  {
    component: SignUpPage,
    path: ROUTES.SIGN_UP,
    exact: true
  },
  {
    component: SignInPage,
    path: ROUTES.SIGN_IN,
    exact: true
  },
  {
    component: PasswordForgetPage,
    path: ROUTES.PASSWORD_FORGET,
    exact: true
  },
  {
    component: HomePage,
    path: ROUTES.HOME,
    exact: true
  },
  {
    component: AccountPage,
    path: ROUTES.ACCOUNT,
    exact: true
  },
  {
    component: SprisePage,
    path: ROUTES.SPRISE,
    exact: true
  },
  {
    component: InstaSprisePage,
    path: ROUTES.INSTA_SPRISE,
    exact: true
  }
]

export default routes;
