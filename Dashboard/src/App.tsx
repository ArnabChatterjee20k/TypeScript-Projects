import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import DashBoard from "./pages/DashBoard";
import { Auth0Provider } from "@auth0/auth0-react";
import { authApi } from "./api/api";
import RouteProxy from "./components/RouteProxy";

export default function App() {
  return (
    <>
      <Auth0Provider
        domain={authApi.data.domain}
        clientId={authApi.data.clientId}
        authorizationParams={{
          redirect_uri: window.location.origin+"/dashboard",
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<RouteProxy />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/dashboard" element={<DashBoard />} />
          </Routes>
        </BrowserRouter>
      </Auth0Provider>
    </>
  );
}