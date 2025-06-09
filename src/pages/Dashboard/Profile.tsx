import { Link } from 'react-router';
import { useUser } from 'src/context/UserContext';

const Profile = () => {
  const { user } = useUser();
  if (!user) {
    return (
      <p>
        You are logged out. Click{' '}
        <span className='link'>
          <Link to='/login'> here</Link>
        </span>{' '}
        Login again
      </p>
    );
  }

  const { firstName, lastName, department } = user;
  return (
    <div className='capitalize'>
      <p>{`FirstName: ${firstName}`}</p>
      <p>{`LastName: ${lastName}`}</p>
      <p>{`Department: ${department}`}</p>
    </div>
  );
};
export default Profile;
