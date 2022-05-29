import './App.css';
import Testimonial from './components/Testimonial';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SendTestimonial from './components/SendTestimonial';
import ThankYou from './components/ThankYou';
import { NotFound } from './components/404';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Testimonial />} />
    <Route path='/send-testimonial' element={<SendTestimonial />} />
    <Route path='/thankyou' element={<ThankYou />} />
    <Route path='*' element={<NotFound />} />
    </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
