import React from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import '../assets/css/style.css'
import '../assets/css/responsive.css'
import Index from '../screens/home'
import StudyMaterial from '../screens/StudyMaterial/StudyMaterial'
import ScienceAndTechnology from '../screens/ScienceAndTechnology/ScienceAndTechnology'
import ScienceTechnologyTopic from '../screens/ScienceAndTechnology/ScienceTechnologyTopic'
import DailyCurrentAffairs from '../screens/DailyCurrentAffairs/DailyCurrentAffairs'
import EditorialSection from '../screens/EditorialSection/EditorialSection'
import Monthlycurrenaffairs from '../screens/Monthlycurrentaffairs/Monthlycurrenaffairs'
import Topicwisecurrentaffairs from '../screens/Topicwisecurrentaffairs/Topicwisecurrentaffairs'
import WhatsNew from '../screens/WhatsNew/WhatsNew'
import LatestBlogs from '../screens/LatestBlogs/LatestBlogs'
import AboutUs from '../screens/AboutUs/AboutUs'
import MyProfile from '../screens/MyProfile/MyProfile'
import Subscription from '../screens/Subscription/Subscription'
import SubscriptionPayment from '../screens/Subscription/SubscriptionPayment'
import StandardPackage from '../screens/Subscription/StandardPackage'
import TrendingonYoutube from '../screens/TrendingonYoutube/TrendingonYoutube'
import VideoPlayer from '../screens/VideoPlayer/VideoPlayer'
import NoteWithVideoPlayer from '../screens/VideoPlayer/NoteWithVideoPlayer'
import Welcome from '../screens/Welcome/Welcome'
import SubjectWiseVideo from '../screens/SubjectWiseVideo/SubjectWiseVideo'
import BlogDetails from '../screens/LatestBlogs/BlogDetails'
import WhatsNewDetails from '../screens/WhatsNew/WhatsNewDetails'
import AllEBook from '../screens/EBook/AllEBook'

// ScrollToTop component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function Routing() {
  return (
    <>
     <BrowserRouter>
     <ScrollToTop /> {/* Add ScrollToTop component here */}
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Index />} />
        <Route path="/study-material" element={<StudyMaterial />} />
        <Route path="/science-and-technology" element={<ScienceAndTechnology />} />
        <Route path="/science-technology-topic" element={<ScienceTechnologyTopic />} />
        <Route path="/daily-current-affairs" element={<DailyCurrentAffairs />} />
        <Route path="/editorial-section" element={<EditorialSection />} />
        <Route path="/monthly-current-affairs" element={<Monthlycurrenaffairs />} />
        <Route path="/topic-current-affairs" element={<Topicwisecurrentaffairs />} />
        <Route path="/whats-new" element={<WhatsNew />} />
        <Route path="/whats-details" element={<WhatsNewDetails />} />
        <Route path="/latest-blogs" element={<LatestBlogs />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/subscription-payment" element={<SubscriptionPayment />} />
        <Route path="/standard-package" element={<StandardPackage />} />
        <Route path="/trending-on-youtube" element={<TrendingonYoutube />} />
        <Route path="/video-player" element={<VideoPlayer />} />
        <Route path="/note-with-video-player" element={<NoteWithVideoPlayer />} />
        <Route path="/subject-wise-video" element={<SubjectWiseVideo />} />
        <Route path="/allEBook" element={<AllEBook />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default Routing