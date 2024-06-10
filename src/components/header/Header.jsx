import {Link, Outlet} from "react-router-dom";

export const Header = () => {
    return (
      <>
        <header>
            <h1>Header</h1>
        </header>
        <main>
            <div>
                <Outlet/>
            </div>
        </main>
      </>
    );
}