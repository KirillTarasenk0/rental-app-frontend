import {useRoutes} from "react-router-dom";
import {Header} from "../header/Header";
import {Commercial} from "../../pages/commercial/Commercial";
import {Flats} from "../../pages/flats/Flats";
import {Houses} from "../../pages/houses/Houses";
import {EditProfile} from "../../pages/settings/editProfile/EditProfile";
import {ViewProfile} from "../../pages/settings/viewProfile/ViewProfile";
import {Registration} from "../../pages/registration/Registration";
import {Login} from "../../pages/login/Login";
import {AddAdvert} from "../../pages/addAdvert/AddAdvert";

export const Router = () => {
    return useRoutes([
        {
            path: "/",
            element: <Header/>,
            children: [
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
                    path: 'settings',
                    children: [
                        {
                            path: 'editProfile',
                            element: <EditProfile/>,
                        },
                        {
                            path: 'viewProfile',
                            element: <ViewProfile/>,
                        }
                    ],
                },
                {
                    path: 'login',
                    element: <Login/>,
                },
                {
                    path: 'registration',
                    element: <Registration/>,
                },
                {
                    path: 'addAdvertisement',
                    element: <AddAdvert/>,
                }
            ],
        },
    ]);
}