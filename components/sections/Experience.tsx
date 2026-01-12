import { useTranslations } from 'next-intl';

export default function Experience() {
  const t = useTranslations('experience');

  const jobs = t.raw('jobs') as Array<{
    title: string;
    company: string;
    period: string;
    description: string[];
  }>;

  return (
    <section className="resume-section p-8 lg:p-20 flex justify-center" id="experience">
      <div className="w-full">
        <h2 className="mb-12">{t('title')}</h2>

        {jobs.map((job, index) => (
          <div key={index} className="flex flex-col md:flex-row justify-between mb-12">
            <div className="flex-1">
              <h3 className="mb-0 text-2xl">{job.title}</h3>
              <div className="text-primary mb-4 text-lg">{job.company}</div>
              <div className="text-gray-600">
                {job.description.map((desc, i) => (
                  <p key={i} className="mb-2">
                    &bull; {desc}
                  </p>
                ))}
              </div>
            </div>
            <div className="md:text-right mt-4 md:mt-0 md:ml-8">
              <span className="text-primary">{job.period}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
