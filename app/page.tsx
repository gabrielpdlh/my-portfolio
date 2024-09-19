import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import RecentProjects from "@/components/RecentProjects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col first-letter:mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        {/* <FloatingNav navItems={[
          {name: 'Home', link: '/', icon: <FaHome />}
        ]} /> */}
        <Navbar ></Navbar>
        <Hero />
        <About />
        <RecentProjects />
        <Skills />
        <Footer />
      </div>
    </main>
  );
}
