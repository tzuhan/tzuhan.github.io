import { useTranslations } from 'next-intl';
import Navigation from '@/components/Navigation';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Education from '@/components/sections/Education';
import Skills from '@/components/sections/Skills';
import Interests from '@/components/sections/Interests';
import Certifications from '@/components/sections/Certifications';

export default function Home() {
  return (
    <main>
      <Navigation />
      <div className="container-fluid p-0">
        <About />
        <hr className="m-0" />
        <Experience />
        <hr className="m-0" />
        <Education />
        <hr className="m-0" />
        <Skills />
        <hr className="m-0" />
        <Interests />
        <hr className="m-0" />
        <Certifications />
      </div>
    </main>
  );
}
