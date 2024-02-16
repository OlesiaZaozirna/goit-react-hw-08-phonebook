import { Suspense } from "react";
import { Outlet } from "react-router-dom";


import Navigation from "components/Navigation/Navigation";

const SharedLayout = () => {
  return (
    <>
      <Navigation/>
      <Suspense fallback={<p>Loading page...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;