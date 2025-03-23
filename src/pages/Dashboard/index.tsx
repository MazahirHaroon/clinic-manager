import { useContext } from 'react';
import { Link } from 'react-router';
import UserContext from 'src/context/UserContext';

const Dashboard = () => {
  const { user } = useContext(UserContext);
  if (!user)
    return (
      <h1>
        <Link to='/login'>Please Login</Link>
      </h1>
    );

  const { firstName, lastName, department } = user;
  return (
    <>
      <div className='p-6'>
        <h1 className='text-2xl'>{`Hello, Dr. ${firstName} ${lastName}`}</h1>
        <p className='capitalize text-base'>{`Department: ${department}`}</p>
      </div>
    </>
  );
};

export default Dashboard;
