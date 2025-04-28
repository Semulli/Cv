import { Route, Routes } from "react-router-dom";
import { ROUTER } from "../../Constants/Router.jsx";
import HomePage from "../../Pages/Home/index.jsx";
import PersonalInfo from "../../Pages/PersonalInfo/index.jsx";
import ProjectsPage from "../../Pages/Projects/index.jsx";
import EducationPage from "../../Pages/Education/index.jsx";
import SkillsPage from "../../Pages/Skills/index.jsx";
import ExperiencePage from "../../Pages/Experience/index.jsx";
import SocialPage from "../../Pages/Social/index.jsx";
import { lazy, Suspense } from "react";
import Footer from "../Footer/index.jsx";
import CvPaper from "../../Pages/cvPaper/index.jsx";
import Loading from "../loading/index.jsx";

const Main = () => {
  const HomePage = lazy(() => import("../../Pages/Home/index.jsx"));
  const PersonalInfo = lazy(() => import("../../Pages/PersonalInfo/index.jsx"));
  const ProjectsPage = lazy(() => import("../../Pages/Projects/index.jsx"));
  const EducationPage = lazy(() => import("../../Pages/Education/index.jsx"));
  const SkillsPage = lazy(() => import("../../Pages/Skills/index.jsx"));
  const ExperiencePage = lazy(() => import("../../Pages/Experience/index.jsx"));
  const SocialPage = lazy(() => import("../../Pages/Social/index.jsx"));
  const CvPaper = lazy(() => import("../../Pages/cvPaper/index.jsx"));
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path={ROUTER.Home} element={<HomePage />} />
          <Route path={ROUTER.Info} element={<PersonalInfo />} />
          <Route path={ROUTER.Projects} element={<ProjectsPage />} />
          <Route path={ROUTER.Education} element={<EducationPage />} />
          <Route path={ROUTER.Skills} element={<SkillsPage />} />
          <Route path={ROUTER.Experience} element={<ExperiencePage />} />
          <Route path={ROUTER.Social} element={<SocialPage />} />
          <Route path={ROUTER.Preview} element={<CvPaper />} />
        </Routes>
        <Footer />
      </Suspense>
    </>
  );
};

export default Main;
