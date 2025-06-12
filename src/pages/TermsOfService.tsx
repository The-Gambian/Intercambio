import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const TermsOfService = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-pan-red text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">{t('terms.title')}</h1>
          <p className="text-xl">{t('terms.lastUpdated')} {new Date().toLocaleDateString()}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-pan-black">{t('terms.agreement.title')}</h2>
            <p className="text-gray-700 mb-4">
              {t('terms.agreement.content')}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-pan-black">{t('terms.use.title')}</h2>
            <p className="text-gray-700 mb-4">
              {t('terms.use.content')}
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              {t('terms.use.list').split('\n').map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p className="text-gray-700 mb-4">
              {t('terms.use.lawful')}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-pan-black">{t('terms.accounts.title')}</h2>
            <p className="text-gray-700 mb-4">{t('terms.accounts.content')}</p>
            <ul className="list-disc pl-6 text-gray-700">
              {t('terms.accounts.list').split('\n').map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-pan-black">{t('terms.guidelines.title')}</h2>
            <p className="text-gray-700 mb-4">{t('terms.guidelines.content')}</p>
            <ul className="list-disc pl-6 text-gray-700">
              {t('terms.guidelines.list').split('\n').map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-pan-black">{t('terms.ip.title')}</h2>
            <p className="text-gray-700 mb-4">
              {t('terms.ip.content')}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-pan-black">{t('terms.events.title')}</h2>
            <p className="text-gray-700 mb-4">
              {t('terms.events.content')}
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              {t('terms.events.list').split('\n').map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-pan-black">{t('terms.liability.title')}</h2>
            <p className="text-gray-700 mb-4">
              {t('terms.liability.content')}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-pan-black">{t('terms.changes.title')}</h2>
            <p className="text-gray-700 mb-4">
              {t('terms.changes.content')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-pan-black">{t('terms.contact.title')}</h2>
            <p className="text-gray-700 mb-4">
              {t('terms.contact.content')}
            </p>
            <div className="bg-pan-green/10 p-4 rounded-lg">
              <p className="text-gray-700">
                <strong>{t('terms.contact.email')}</strong> info@intercambiodiaspora.org<br />
                <strong>{t('terms.contact.address')}</strong> Lisbon, Portugal
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;