import { useTranslations } from 'next-intl';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import { artSocialLinks } from '@/lib/data/social-links';

export default function Interests() {
  const t = useTranslations('interests');

  const content = t.raw('content') as string[];

  return (
    <section className="resume-section p-8 lg:p-20 flex items-center" id="interests">
      <div className="w-full">
        <h2 className="mb-12">{t('title')}</h2>

        {content.map((paragraph, index) => (
          <p key={index} className="mb-4 text-gray-600">
            {paragraph}
          </p>
        ))}

        <p className="text-xl font-semibold mb-4 mt-8">{t('artLinksTitle')}</p>
        <div className="social-icons flex">
          <a href={artSocialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook Art">
            <FaFacebookF />
          </a>
          {artSocialLinks.instagram && (
            <a href={artSocialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
          )}
          {artSocialLinks.twitter && (
            <a href={artSocialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
          )}
          <a href={artSocialLinks.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <FaYoutube />
          </a>
        </div>
      </div>
    </section>
  );
}
