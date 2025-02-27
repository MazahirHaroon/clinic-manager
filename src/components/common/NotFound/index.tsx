import Logo from "@common-components/Logo";
import PrimaryButton from "@common-components/Button/primary";
import "./index.css";

const NotFound = () => {
    return (
        <div className="not-found-container">
            <div className="logo-container">
                <Logo src="/clinic-manager-logo-and-heading.png" alt="Clinic Manager" />
            </div>
            <h1 className="not-found-title">404</h1>
            <p className="not-found-message">{"Oops! The page you're looking for doesn't exist."}</p>
            <div className="button-group">
                <div>
                    <PrimaryButton content="Go Home" />
                </div>
            </div>
        </div>
    );
};

export default NotFound;
