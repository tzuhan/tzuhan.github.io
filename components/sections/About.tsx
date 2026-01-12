import { useTranslations } from 'next-intl';
import { FaLinkedinIn, FaGithub, FaFacebookF } from 'react-icons/fa';
import { socialLinks } from '@/lib/data/social-links';

export default function About() {
  const t = useTranslations('about');

  return (
    <section className="resume-section p-8 lg:p-20 flex items-center" id="about">
      <div className="w-full">
        <div className="inline-block bg-white/50 rounded-lg px-6 py-4 mb-8">
          <h1 className="mb-2">
            {t('firstName')}
            <span className="text-primary"> {t('lastName')}</span>
          </h1>

          <h3 className="text-xl lg:text-2xl font-normal normal-case">{t('tagline')}</h3>
        </div>

        <div className="social-icons flex">
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookF />
          </a>
        </div>
      </div>
    </section>
  );
}
