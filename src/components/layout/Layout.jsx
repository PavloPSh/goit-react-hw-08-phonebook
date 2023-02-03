import { NavBar } from "components/navigation/NavBar";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";

export const Layout = () => {
    return (
        <>
            
            <NavBar />
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
        </>
    )
};
