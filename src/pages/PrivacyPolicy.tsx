import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const PrivacyPolicy = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-pan-red text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">{t('privacy.title')}</h1>
          <p className="text-xl">{t('privacy.lastUpdated')} {new Date().toLocaleDateString()}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-pan-black">{t('privacy.intro.title')}</h2>
            <p className="text-gray-700 mb-4">
              {t('privacy.intro.content')}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-pan-black">{t('privacy.collect.title')}</h2>
            <p className="text-gray-700 mb-4">{t('privacy.collect.content')}</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              {t('privacy.collect.direct').split('\n').map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p className="text-gray-700 mb-4">
              {t('privacy.collect.auto')}
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              {t('privacy.collect.autoList').split('\n').map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-pan-black">{t('privacy.use.title')}</h2>
            <p className="text-gray-700 mb-4">{t('privacy.use.content')}</p>
            <ul className="list-disc pl-6 text-gray-700">
              {t('privacy.use.list').split('\n').map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-pan-black">{t('privacy.cookies.title')}</h2>
            <p className="text-gray-700 mb-4">
              {t('privacy.cookies.content1')}
            </p>
            <p className="text-gray-700 mb-4">
              {t('privacy.cookies.content2')}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-pan-black">{t('privacy.sharing.title')}</h2>
            <p className="text-gray-700 mb-4">{t('privacy.sharing.content')}</p>
            <ul className="list-disc pl-6 text-gray-700">
              {t('privacy.sharing.list').split('\n').map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-pan-black">{t('privacy.rights.title')}</h2>
            <p className="text-gray-700 mb-4">{t('privacy.rights.content')}</p>
            <ul className="list-disc pl-6 text-gray-700">
              {t('privacy.rights.list').split('\n').map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-pan-black">{t('privacy.security.title')}</h2>
            <p className="text-gray-700 mb-4">
              {t('privacy.security.content')}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-pan-black">{t('privacy.changes.title')}</h2>
            <p className="text-gray-700 mb-4">
              {t('privacy.changes.content')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-pan-black">{t('privacy.contact.title')}</h2>
            <p className="text-gray-700 mb-4">
              {t('privacy.contact.content')}
            </p>
            <div className="bg-pan-green/10 p-4 rounded-lg">
              <p className="text-gray-700">
                <strong>{t('privacy.contact.email')}</strong> info@intercambiodiaspora.org<br />
                <strong>{t('privacy.contact.address')}</strong> Lisbon, Portugal
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;