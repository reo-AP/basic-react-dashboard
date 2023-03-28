import './App.css';
import Header from '../src/components/header'
import TestimonialCarousel from './components/testimonial';
import Home from './components/home';
import Pricing from './components/pricing';
function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Pricing/>
      <TestimonialCarousel/>
    </div>
  );
}

export default App;
