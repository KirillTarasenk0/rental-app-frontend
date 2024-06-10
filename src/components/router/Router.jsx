import {useRoutes, Navigate} from "react-router-dom";
import {Header} from "../header/Header";

export const Router = () => {
    return useRoutes([
        {
            path: "/",
            element: <Header/>,
            children: [
                {

                },
            ],
        },
    ]);
}