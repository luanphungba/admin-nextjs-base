export enum Pages {
  Login = '/login',
  Register = '/register',
  ForgotPassword = '/forgot-password',
  Dashboard = '/dashboard',
  SignUp = '/signup',
  Terms = '/terms',
  Privacy = '/privacy',
}

export const publicRoutes = [Pages.Login, Pages.Register, Pages.ForgotPassword];

// You can also add other route-related configurations here
export const protectedRoutes = [Pages.Dashboard];
