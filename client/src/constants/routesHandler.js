import SignUpPage from '../pages/Authentication/SignUp';
import SignInPage from '../pages/Authentication/SignIn';
import LandingPage from '../pages/Landing';
import AccountPage from '../pages/Account';
import HomePage from '../pages/Home';
import PasswordForgetPage from '../pages/Authentication/PasswordForget';
import SprisePage from '../pages/Sprise';
import * as ROUTES from './routes';
import InstaSprisePage from '../pages/InstaSprise';

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
