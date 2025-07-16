// src/App.tsx
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/Home";
import Reserve from "./pages/Reserve";
import Main from "./pages/Main";
import GlobalLoading from "./components/GlobalLoading";
import Layout from "./components/Layout";

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.25 }}
      className="h-screen"
    >
      <Layout>{children}</Layout>
    </motion.div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <>
      <GlobalLoading />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/home"
            element={
              <PageWrapper>
                <Home />
              </PageWrapper>
            }
          />
          <Route
            path="/reserve"
            element={
              <PageWrapper>
                <Reserve />
              </PageWrapper>
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        {/* 스플래시: 여기서도 Layout 적용 */}
        <Route
          path="/"
          element={
            <Layout>
              <Main />
            </Layout>
          }
        />

        {/* 나머지 페이지: PageWrapper 안에서 Layout 처리됨 */}
        <Route path="/*" element={<AnimatedRoutes />} />
      </Routes>
    </Router>
  );
}
