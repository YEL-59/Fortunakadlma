import HomeLayout from "@/layouts/HomeLayout";
import About from "@/pages/main/about";
import GoalTracker from "@/pages/main/goal-tracker";
import GoalCreate from "@/pages/main/goal-tracker/goal-create";
import Home from "@/pages/main/home";
import ResumeBuilder from "@/pages/main/resumebuilder";
import ResumeBuilderStepper from "@/pages/main/resumebuilder/stepper";
import InterviewPreparation from "@/pages/main/interview-preperation";
import CreativeRoleInterview from "@/pages/main/interview-preperation/creative-role";
import BusinessInterview from "@/pages/main/interview-preperation/business";
import EngineeringInterview from "@/pages/main/interview-preperation/engineering";
import ScienceTechInterview from "@/pages/main/interview-preperation/science-tech";
import HealthcareInterview from "@/pages/main/interview-preperation/healthcare";
import GeneralInterview from "@/pages/main/interview-preperation/general";
import Congratulations from "@/pages/main/interview-preperation/congratulations";
import LearningCoach from "@/pages/main/learning-coach";
import VideoPlayer from "@/pages/main/learning-coach/video-player";
import CourseDetails from "@/pages/main/learning-coach/course-details";
import AllVideos from "@/pages/main/learning-coach/all-videos";
import AllCourses from "@/pages/main/learning-coach/all-courses";
import Badge from "@/pages/main/badge";
import Leaderboard from "@/pages/main/badge/leaderboard";
import Progress from "@/pages/main/badge/progress";
import { createBrowserRouter } from "react-router";
import PortfolioBuilder from "@/pages/main/portfolio-builder";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "resume-builder",
        element: <ResumeBuilder />,
      },
      {
        path: "resumeBuild-step",
        element: <ResumeBuilderStepper />,
      },
      {
        path: "goal-tracker",
        element: <GoalTracker />,
      },
      {
        path: "create-new-goal",
        element: <GoalCreate />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "interview-prep",
        element: <InterviewPreparation />,
      },
      {
        path: "interview-prep/creative-role",
        element: <CreativeRoleInterview />,
      },
      {
        path: "interview-prep/business",
        element: <BusinessInterview />,
      },
      {
        path: "interview-prep/engineering",
        element: <EngineeringInterview />,
      },
      {
        path: "interview-prep/science-tech",
        element: <ScienceTechInterview />,
      },
      {
        path: "interview-prep/healthcare",
        element: <HealthcareInterview />,
      },
      {
        path: "interview-prep/general",
        element: <GeneralInterview />,
      },
      {
        path: "interview-prep/congratulations",
        element: <Congratulations />,
      },
      {
        path: "learning-coach",
        element: <LearningCoach />,
      },
      {
        path: "learning-coach/video-player/:id",
        element: <VideoPlayer />,
      },
      {
        path: "learning-coach/course-details/:id",
        element: <CourseDetails />,
      },
      {
        path: "learning-coach/all-videos",
        element: <AllVideos />,
      },
      {
        path: "learning-coach/all-courses",
        element: <AllCourses />,
      },
      {
        path: "badges",
        element: <Badge />,
      },
      {
        path: "badges/leaderboard",
        element: <Leaderboard />,
      },
      {
        path: "badges/progress",
        element: <Progress />,
      },
      {
        path: "portfolio-builder",
        element: <PortfolioBuilder />,
      }
    ],
  },
]);
