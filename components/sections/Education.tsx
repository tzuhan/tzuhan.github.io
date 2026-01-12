import { useTranslations } from 'next-intl';

export default function Education() {
  const t = useTranslations('education');

  const schools = t.raw('schools') as Array<{
    name: string;
    degree: string;
    field: string;
    gpa: string;
    period: string;
  }>;

  return (
    <section className="resume-section p-8 lg:p-20 flex items-center" id="education">
      <div className="w-full">
        <h2 className="mb-12">{t('title')}</h2>

        {schools.map((school, index) => (
          <div key={index} className="flex flex-col md:flex-row justify-between mb-12">
            <div className="flex-1">
              <h3 className="mb-0 text-2xl">{school.name}</h3>
              <div className="text-primary mb-2 text-lg">{school.degree}</div>
              <div className="mb-2">{school.field}</div>
              <p>GPA: {school.gpa}</p>
            </div>
            <div className="md:text-right mt-4 md:mt-0">
              <span className="text-primary">{school.period}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
