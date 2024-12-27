import "../../index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { gitProductItem } from "../features/Homepage/HomepageSlice";
import Cart from "../features/Cart/Cart";
import Loading from "../ui/Loading";
import useRedux from "../hooks/useRedux";

const Homepage = lazy(() => import("../features/Homepage/Homepage"));
const Contact = lazy(() => import("../components/Contact"));
const Wishlist = lazy(() => import("../features/Wishlist/Wishlist"));
const AppLayout = lazy(() => import("./AppLayout"));
const LikePage = lazy(() => import("../page/LikePage"));
const Error = lazy(() => import("../ui/Error"));

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Wishlist",
        element: <Wishlist />,
      },
      {
        path: "/About",
        element: <Contact />,
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
      {
        path: "/LikePage",
        element: <LikePage />,
      },
    ],
  },
]);

function App() {
  const { dispatch, appSelector } = useRedux();

  const { isLoading, error } = appSelector((state) => state.product);

  useEffect(() => {
    dispatch(gitProductItem("bakers"));
  }, [dispatch]);

  return (
    <Suspense fallback={<Loading />}>
      <>
        {error ? (
          <Error
            type="Network Error "
            text=" Chick the network then render"
            NoBack={true}
          />
        ) : isLoading ? (
          <Loading />
        ) : (
          <RouterProvider router={router} />
        )}
      </>
    </Suspense>
  );
}

export default App;
