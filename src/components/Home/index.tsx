import Logo from '../common/Logo';
import PrimaryButton from '@common-components/Button/primary';
import './index.css';

const Home = () => {
    return (
        <div className='home-container'>
            <div className='content'>
                <Logo
                    src={'public/clinic-manager-logo-and-heading.png'}
                    alt={'Clinic Manager'}
                />
                <h1 className='home-title'>Welcome to Clinic Manager</h1>
                <p className='home-subtitle'>
                    Your digital assistant for seamless clinic management.
                </p>
                <div className='home-buttons'>
                    <div>
                        <PrimaryButton content='Sign Up' type='button' />
                    </div>
                    <div>
                        <PrimaryButton content='Login' type='button' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
