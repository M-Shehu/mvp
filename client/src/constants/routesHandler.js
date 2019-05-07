import SignUpPage from '../components/SignUp.jsx';
import SignInPage from '../components/SignIn.jsx';
import LandingPage from '../components/Landing.jsx';
import AccountPage from '../components/Account.jsx';
import HomePage from '../components/Home.jsx';
import PasswordForgetPage from '../components/PasswordForget.jsx';
import SprisePage from '../components/Sprise.jsx';
import * as ROUTES from './routes.js';
import InstaSprisePage from '../components/InstaSprise.jsx';

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
