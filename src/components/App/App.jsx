import './App.css';
import Layout from '../Layout/Layout';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy (() => import('../../pages/HomePage/HomePage'));
const AboutPage = lazy (() => import('../../pages/AboutPage/AboutPage'));
const PricePage = lazy (() => import('../../pages/PricePage/PricePage'));
const VideoPage = lazy (() => import('../../pages/VideoPage/VideoPage'));
const GalleryPage = lazy (() => import('../../pages/GalleryPage/GalleryPage'));
const ContactPage = lazy (() => import('../../pages/ContactPage/ContactPage'));

function App() {

  return (
      <Layout>
        <Suspense fallback={<div>Please wait, page is making</div>}>
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/about" element={<AboutPage />}/>
            <Route path="/price" element={<PricePage />}/>
            <Route path="/video" element={<VideoPage />}/>
            <Route path="/gallery" element={<GalleryPage />}/>
            <Route path="/contacts" element={<ContactPage />}/>
          </Routes>
        </Suspense>
      </Layout>
  )
}

export default App
