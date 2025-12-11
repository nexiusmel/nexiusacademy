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
import CourseNavigation from './components/CourseNavigation';

function App() {
  return (
    <div className="font-body text-charcoal bg-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <CourseNavigation />
        <About />
        <Categories />
        
        {/* Who is this Course For Section */}
        <section id="audience" className="bg-white py-12 md:py-16 text-center scroll-mt-32">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Who is this Course For?</h2>
            {/* Decorative Divider */}
            <div className="w-20 h-1.5 bg-secondary mx-auto rounded-full mb-8"></div>
            <p className="text-gray-500 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
              Designed for non-technical professionals, managers, and business leaders ready to harness the power of Agentic AI to automate workflows and drive efficiency.
            </p>
          </div>
        </section>

        <StatsStrip />
        <InstructorCTA />
        <CourseList />
        <Testimonials />
        <BottomSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;