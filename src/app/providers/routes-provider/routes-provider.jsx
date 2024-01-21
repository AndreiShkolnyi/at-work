import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Layout } from '../../../widgets/layout/layout';
const Home = lazy(() => import("../../../pages/home"));
const ProfilePage = lazy(() => import("../../../pages/profile"));

export const RoutesProvider = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout></Layout>}>
        <Route
          index
          element={
            <Suspense>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="profile/:id"
          element={
            <Suspense>
              <ProfilePage />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};