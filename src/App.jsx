import {
  BrowserRouter,
  Navigate,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import AppDesign from "./pages/AppDesign";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import GraphicsDesign from "./pages/GraphicsDesign";
import Locations from "./pages/Locations";
import WebDesign from "./pages/WebDesign";
import GlobalStyles from "./Styles/GlobalStyles";
import { Toaster } from "react-hot-toast";
import ScrollToTopOnMount from "./ui/ScrollToTopOnMount";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const query = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});

// const router = createBrowserRouter([
//   {
//     element: <AppLayout />,
//     errorElement: <PageNotFound />,

//     children: [
//       {
//         path: "/home",
//         element: <Home />,
//       },
//       {
//         path: "/appdesign",
//         element: <AppDesign />,
//       },
//       {
//         path: "/about",
//         element: <About />,
//       },
//       {
//         path: "/contacts",
//         element: <Contacts />,
//       },
//       {
//         path: "/graphicsDesign",
//         element: <GraphicsDesign />,
//       },
//       {
//         path: "/locations",
//         element: <Locations />,
//       },
//       {
//         path: "/webDesign",
//         element: <WebDesign />,
//       },
//       // {
//       //   path: "*",
//       //   element: <Navigate to="/" />,
//       // },
//     ],
//   },
// ]);

function App() {
  return (
    <QueryClientProvider client={query}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />
      {/* <RouterProvider router={router} /> */}

      <BrowserRouter>
        <ScrollToTopOnMount />
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="appdesign" element={<AppDesign />} />
            <Route path="about" element={<About />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="graphicsDesign" element={<GraphicsDesign />} />
            <Route path="locations" element={<Locations />} />
            <Route path="webDesign" element={<WebDesign />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-right"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 5000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "#ffff",
            color: "#1d1c1e",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
