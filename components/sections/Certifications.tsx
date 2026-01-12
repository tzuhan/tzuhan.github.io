import { useTranslations } from 'next-intl';
import { FaCircle } from 'react-icons/fa';

export default function Certifications() {
  const t = useTranslations('certifications');

  const items = t.raw('items') as string[];

  return (
    <section className="resume-section p-8 lg:p-20 flex items-center" id="certifications">
      <div className="w-full">
        <h2 className="mb-12">{t('title')}</h2>

        <ul className="list-none mb-0">
          {items.map((item, index) => (
            <li key={index} className="mb-3 flex items-start">
              <FaCircle className="text-yellow-500 mr-3 mt-1 text-xs flex-shrink-0" />
              <span className="text-gray-600">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
