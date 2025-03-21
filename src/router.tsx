import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router';
import { Welcome, NotFound, SignUp, Login, Profile, Dashboard } from '@pages';
import { Layout } from '@clinic-ui';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Dashboard />} errorElement={<NotFound />} />
        <Route path='/profile' element={<Profile />} />
      </Route>
      <Route path='/welcome' element={<Welcome />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='*' element={<NotFound />} />
    </>
  )
);
