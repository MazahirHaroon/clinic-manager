import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router';

import AuthWrapper from './AuthWrapper';
import {
  Welcome,
  NotFound,
  SignUp,
  Login,
  Layout,
  Profile,
  Dashboard,
} from '@pages';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<AuthWrapper />}>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='profile' element={<Profile />} />
        </Route>
      </Route>
      <Route path='/welcome' element={<Welcome />} />
      <Route path='*' element={<NotFound />} />
    </>
  )
);
