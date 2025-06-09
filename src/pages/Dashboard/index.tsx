import { Link } from 'react-router';
import { useUser } from 'src/context/UserContext';

const Dashboard = () => {
  const { user } = useUser();
  if (!user)
    return (
      <p>
        You are logged out. Click{' '}
        <span className='link'>
          <Link to='/login'> here</Link>
        </span>{' '}
        Login again
      </p>
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
