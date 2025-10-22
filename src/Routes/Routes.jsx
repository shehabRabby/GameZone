import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
import RegistrationPage from "../Pages/RegistrationPage";
import GameDetails from "../Pages/GameDetails";
import ErrorPage from "../Pages/ErrorPage";
import MyProfile from "../Pages/MyProfile";

 export const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                index:true,
                element:<HomePage></HomePage>
            },
            {
                path:"/signin",
                element:<LoginPage></LoginPage>
            },
            {
                path:"/signup",
                element:<RegistrationPage></RegistrationPage>
            },
            {
                path:"/gameDetails",
                element:<GameDetails></GameDetails>
            },
            {
                path:"/myprofile",
                element:<MyProfile></MyProfile>
            },
            {
                path:"/*",
                element:<ErrorPage></ErrorPage>
            },
        ]
    }
])