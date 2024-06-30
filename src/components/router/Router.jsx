import {Navigate, useRoutes} from "react-router-dom";
import {Header} from "../header/Header";
import {Commercial} from "../../pages/commercial/Commercial";
import {Flats} from "../../pages/flats/Flats";
import {Houses} from "../../pages/houses/Houses";
import {EditProfile} from "../../pages/settings/editProfile/EditProfile";
import {Register} from "../../pages/register/Register";
import {AddAdvert} from "../../pages/addAdvert/AddAdvert";
import {Home} from "../../pages/home/Home";
import {AllProperties} from "../../pages/allProperties/AllProperties";
import {PropertyDetail} from "../../pages/propertyDetail/PropertyDetail";
import {CheepProperties} from "../../pages/cheepProperties/CheepProperties";
import {MediumProperties} from "../../pages/mediumProperties/MediumProperties";
import {ExpensiveProperties} from "../../pages/expensiveProperties/ExpensiveProperties";
import {Error404} from "../../pages/error404/Error404";
import {RoomsProperties} from "../../pages/roomsProperties/RoomsProperties";
import {SearchedProperties} from "../../pages/searchedProperties/SearchedProperties";
import {Login} from "../../pages/login/Login";
import {UserProfile} from "../../pages/userProfile/UserProfile";
import {MyAdverts} from "../../pages/myAdverts/MyAdverts";

export const Router = () => {
    return useRoutes([
        {
            path: '/',
            element: <Header/>,
            children: [
                {
                    path: '/',
                    element: <Home/>,
                },
                {
                    path: 'houses',
                    element: <Houses/>,
                },
                {
                    path: 'flats',
                    element: <Flats/>
                },
                {
                    path: 'commercial',
                    element: <Commercial/>,
                },
                {
                    path: 'allProperties',
                    element: <AllProperties/>,
                },
                {
                    path: 'property/:id',
                    element: <PropertyDetail/>,
                },
                {
                    path: 'cheep',
                    element: <CheepProperties/>,
                },
                {
                    path: 'medium',
                    element: <MediumProperties/>,
                },
                {
                    path: 'expensive',
                    element: <ExpensiveProperties/>,
                },
                {
                    path: 'rooms/:roomNumber',
                    element: <RoomsProperties/>,
                },
                {
                    path: 'properties/searched',
                    element: <SearchedProperties/>,
                },
                {
                    path: 'settings',
                    children: [
                        {
                            path: 'editProfile',
                            element: <EditProfile/>,
                        },
                        {
                            path: 'viewProfile',
                            element: <UserProfile/>,
                        },
                        {
                            path: 'myAdverts',
                            element: <MyAdverts/>,
                        },
                    ],
                },
                {
                    path: 'register',
                    element: <Register/>,
                },
                {
                    path: 'login',
                    element: <Login/>,
                },
                {
                    path: 'addAdvertisement',
                    element: <AddAdvert/>,
                },
                {
                    path: '404',
                    element: <Error404/>,
                },
                {
                    path: '*',
                    element: <Navigate to='/404'/>
                }
            ],
        },
    ]);
}