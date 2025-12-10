import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Categories from './components/Categories';
import StatsStrip from './components/StatsStrip';
import CourseList from './components/CourseList';
import InstructorCTA from './components/InstructorCTA';
import Testimonials from './components/Testimonials';
import BottomSection from './components/BottomSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-body text-charcoal bg-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <About />
        <Categories />
        <StatsStrip />
        <CourseList />
        <InstructorCTA />
        <Testimonials />
        <BottomSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;