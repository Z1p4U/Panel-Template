import RouteGuard from "@/components/RouteGuard";
import ScrollToTop from "@/components/ScrollToTop";
import DashboardLayout from "@/layout/DashboardLayout";
import Dashboard from "@/modules/dashboard/Dashboard";
import Media from "@/modules/media/Media";
import Login from "@/pages/Login";
import { Route, Routes } from "react-router-dom";

const Path = () => {
  return (
    <div className=" relative">
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <RouteGuard>
              <DashboardLayout />
            </RouteGuard>
          }
        >
          {/* Dashboard Page */}
          <Route index element={<Dashboard />} />
          {/* Dashboard Page */}

          {/* Media Page */}
          <Route path="/media" element={<Media />} />
          {/* Media Page */}
        </Route>

        {/* Login Pages */}
        <Route path="/login" element={<Login />} />
        {/* Login Pages */}
      </Routes>
    </div>
  );
};

export default Path;
