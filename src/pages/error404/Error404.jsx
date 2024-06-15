import './Error404.scss';

export const Error404 = () => {
    return (
        <>
            <div className="error404">
                <div className="error404__container">
                    <h1 className="error404__title">404</h1>
                    <p className="error404__message">Oops! The page you're looking for doesn't exist.</p>
                    <a href="/" className="error404__home-link">Go Back Home</a>
                </div>
            </div>
        </>
    );
}
