import { useTranslations } from 'next-intl';
import {
  SiC,
  SiCplusplus,
  SiGo,
  SiPhp,
  SiMysql,
  SiAndroid,
  SiLinux,
  SiHtml5,
  SiCss3,
  SiGit,
  SiMarkdown,
  SiAdobephotoshop,
  SiAdobeillustrator,
} from 'react-icons/si';

const skillIcons: Record<string, any> = {
  c: SiC,
  cpp: SiCplusplus,
  go: SiGo,
  php: SiPhp,
  mysql: SiMysql,
  android: SiAndroid,
  linux: SiLinux,
  html5: SiHtml5,
  css3: SiCss3,
  git: SiGit,
  markdown: SiMarkdown,
  photoshop: SiAdobephotoshop,
  illustrator: SiAdobeillustrator,
};

const skills = [
  'c',
  'cpp',
  'go',
  'php',
  'mysql',
  'android',
  'linux',
  'html5',
  'css3',
  'git',
  'markdown',
  'photoshop',
  'illustrator',
];

export default function Skills() {
  const t = useTranslations('skills');

  return (
    <section className="resume-section p-8 lg:p-20 flex items-center" id="skills">
      <div className="w-full">
        <h2 className="mb-12">{t('title')}</h2>

        <div className="text-xl mb-6 font-semibold">{t('subtitle')}</div>
        <ul className="list-none flex flex-wrap gap-4 dev-icons">
          {skills.map((skill) => {
            const Icon = skillIcons[skill];
            return (
              <li key={skill} className="inline-block">
                {Icon && <Icon className="w-12 h-12 text-gray-700" />}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
