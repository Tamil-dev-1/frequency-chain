import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home';
import Aboutfrec from '../pages/aboutfrec/Aboutfrec';
import Governance from '../pages/governance/Governance';
import Developer from '../pages/build_page/developer/Developer';
import Doc from '../pages/build_page/doc/Doc';
import Ecosystem from '../pages/ecosystem/Ecosysytem';
import OurProduct from '../pages/ecosystem/OurProduct';
import StakeEarn from '../pages/getstarted/StakeEarn';
import Header from '../component/header/Header';
import Whitepaper from '../pages/research/Whitepaper';
import Roadmap from '../pages/research/Roadmap';
import Footer from '../component/footer/Footer';
import Faq from '../pages/learn/Faq';
import Blog from '../pages/blog/Blog';
import AllEvents from '../pages/allevents/AllEvents'
const AppRouter = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
       <Route path= 'about-frecx' element={<Aboutfrec />} />
       <Route path= '/governance' element={<Governance/>} />
       <Route path= '/developer' element={<Developer />} />
       <Route path= '/doc' element={<Doc />} />
       <Route path= '/eco-system' element={<Ecosystem />} />
       <Route path= '/ourproduct' element={<OurProduct />} />
       <Route path= '/stake-earn' element={<StakeEarn />} />
       <Route path= '/whitepaper' element={<Whitepaper />} />
       <Route path= '/roadmap' element={<Roadmap />} />
       <Route path= '/faq' element={<Faq />} />
       <Route path= '/blog' element={<Blog />} />
       <Route path= '/all-events' element={<AllEvents />} />
       
      </Routes>
      <Footer />
    </>
  )
}

export default AppRouter
