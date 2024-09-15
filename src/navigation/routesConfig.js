import React, { lazy, Suspense } from "react";
import Loader from "../components/Loader/Loader";
import "../screens/home/index.css";
import "../components/Lightbox/lightbox.css";
const Index = lazy(() => import("../screens/home"));
const Welcome = lazy(() => import("../screens/Welcome/Welcome"));
const StudyMaterial = lazy(() =>
  import("../screens/StudyMaterial/StudyMaterial")
);
const AllQuiz = lazy(() => import("../screens/Quiz/Quiz"));
const QuizBySubject = lazy(() => import("../screens/Quiz/QuizBySubject"));
const StartQuiz = lazy(() => import("../screens/Quiz/StartQuiz"));
const ScienceAndTechnology = lazy(() =>
  import("../screens/ScienceAndTechnology/ScienceAndTechnology")
);
const ScienceTechnologyTopic = lazy(() =>
  import("../screens/ScienceAndTechnology/ScienceTechnologyTopic")
);
const DailyCurrentAffairs = lazy(() =>
  import("../screens/DailyCurrentAffairs/DailyCurrentAffairs")
);
const EditorialSection = lazy(() =>
  import("../screens/EditorialSection/EditorialSection")
);
const Monthlycurrenaffairs = lazy(() =>
  import("../screens/Monthlycurrentaffairs/Monthlycurrenaffairs")
);
const Topicwisecurrentaffairs = lazy(() =>
  import("../screens/Topicwisecurrentaffairs/Topicwisecurrentaffairs")
);
const WhatsNew = lazy(() => import("../screens/WhatsNew/WhatsNew"));
const LatestBlogs = lazy(() => import("../screens/LatestBlogs/LatestBlogs"));
const AboutUs = lazy(() => import("../screens/AboutUs/AboutUs"));
const MyProfile = lazy(() => import("../screens/MyProfile/MyProfile"));
const Subscription = lazy(() => import("../screens/Subscription/Subscription"));
const SubscriptionPayment = lazy(() =>
  import("../screens/Subscription/SubscriptionPayment")
);
const StandardPackage = lazy(() =>
  import("../screens/Subscription/StandardPackage")
);
const TrendingonYoutube = lazy(() =>
  import("../screens/TrendingonYoutube/TrendingonYoutube")
);
const VideoPlayer = lazy(() => import("../screens/VideoPlayer/VideoPlayer"));
const NoteWithVideoPlayer = lazy(() =>
  import("../screens/VideoPlayer/NoteWithVideoPlayer")
);
const SubjectWiseVideo = lazy(() =>
  import("../screens/SubjectWiseVideo/SubjectWiseVideo")
);
const BlogDetails = lazy(() => import("../screens/LatestBlogs/BlogDetails"));
const WhatsNewDetails = lazy(() =>
  import("../screens/WhatsNew/WhatsNewDetails")
);
const AllEBook = lazy(() => import("../screens/EBook/AllEBook"));

const routesConfig = [
  {
    path: "/",
    label: "Welcome",
    component: (
      <Suspense fallback={<Loader />}>
        <Welcome />
      </Suspense>
    ),
  },
  {
    path: "/home",
    label: "Home",
    component: (
      <Suspense fallback={<Loader />}>
        <Index />
      </Suspense>
    ),
  },
  {
    path: "/study-material",
    label: "Study Material",
    component: (
      <Suspense fallback={<Loader />}>
        <StudyMaterial />
      </Suspense>
    ),
  },
  {
    path: "/science-and-technology",
    label: "Science and Technology",
    component: (
      <Suspense fallback={<Loader />}>
        <ScienceAndTechnology />
      </Suspense>
    ),
  },
  {
    path: "/science-technology-topic",
    label: "Science Technology Topic",
    component: (
      <Suspense fallback={<Loader />}>
        <ScienceTechnologyTopic />
      </Suspense>
    ),
  },
  {
    path: "/daily-current-affairs",
    label: "Daily Current Affairs",
    component: (
      <Suspense fallback={<Loader />}>
        <DailyCurrentAffairs />
      </Suspense>
    ),
  },
  {
    path: "/editorial-section",
    label: "Editorial Section",
    component: (
      <Suspense fallback={<Loader />}>
        <EditorialSection />
      </Suspense>
    ),
  },
  {
    path: "/monthly-current-affairs",
    label: "Monthly Current Affairs",
    component: (
      <Suspense fallback={<Loader />}>
        <Monthlycurrenaffairs />
      </Suspense>
    ),
  },
  {
    path: "/topic-current-affairs",
    label: "Topic Current Affairs",
    component: (
      <Suspense fallback={<Loader />}>
        <Topicwisecurrentaffairs />
      </Suspense>
    ),
  },
  {
    path: "/whats-new",
    label: "What’s New",
    component: (
      <Suspense fallback={<Loader />}>
        <WhatsNew />
      </Suspense>
    ),
  },
  {
    path: "/whats-details",
    label: "What’s New Details",
    component: (
      <Suspense fallback={<Loader />}>
        <WhatsNewDetails />
      </Suspense>
    ),
  },
  {
    path: "/latest-blogs",
    label: "Latest Blogs",
    component: (
      <Suspense fallback={<Loader />}>
        <LatestBlogs />
      </Suspense>
    ),
  },
  {
    path: "/blog-details",
    label: "Blog Details",
    component: (
      <Suspense fallback={<Loader />}>
        <BlogDetails />
      </Suspense>
    ),
  },
  {
    path: "/about-us",
    label: "About Us",
    component: (
      <Suspense fallback={<Loader />}>
        <AboutUs />
      </Suspense>
    ),
  },
  {
    path: "/my-profile",
    label: "My Profile",
    component: (
      <Suspense fallback={<Loader />}>
        <MyProfile />
      </Suspense>
    ),
  },
  {
    path: "/subscription",
    label: "Subscription",
    component: (
      <Suspense fallback={<Loader />}>
        <Subscription />
      </Suspense>
    ),
  },
  {
    path: "/subscription-payment",
    label: "Subscription Payment",
    component: (
      <Suspense fallback={<Loader />}>
        <SubscriptionPayment />
      </Suspense>
    ),
  },
  {
    path: "/standard-package",
    label: "Standard Package",
    component: (
      <Suspense fallback={<Loader />}>
        <StandardPackage />
      </Suspense>
    ),
  },
  {
    path: "/trending-on-youtube",
    label: "Trending on YouTube",
    component: (
      <Suspense fallback={<Loader />}>
        <TrendingonYoutube />
      </Suspense>
    ),
  },
  {
    path: "/video-player",
    label: "Video Player",
    component: (
      <Suspense fallback={<Loader />}>
        <VideoPlayer />
      </Suspense>
    ),
  },
  {
    path: "/note-with-video-player",
    label: "Note with Video Player",
    component: (
      <Suspense fallback={<Loader />}>
        <NoteWithVideoPlayer />
      </Suspense>
    ),
  },
  {
    path: "/subject-wise-video",
    label: "Subject Wise Video",
    component: (
      <Suspense fallback={<Loader />}>
        <SubjectWiseVideo />
      </Suspense>
    ),
  },
  {
    path: "/allEBook",
    label: "All EBook",
    component: (
      <Suspense fallback={<Loader />}>
        <AllEBook />
      </Suspense>
    ),
  },
  {
    path: "/subjectwisequiz/:subjectId",
    label: "All quiz",
    component: (
      <Suspense fallback={<Loader />}>
        <QuizBySubject />
      </Suspense>
    ),
  },
  {
    path: "/quiz",
    label: "All quiz",
    component: (
      <Suspense fallback={<Loader />}>
        <AllQuiz />
      </Suspense>
    ),
  },
  {
    path: "/startquiz",
    label: "Start quiz",
    component: (
      <Suspense fallback={<Loader />}>
        <StartQuiz />
      </Suspense>
    ),
  },
];

export default routesConfig;
