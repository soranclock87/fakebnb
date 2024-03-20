import React from 'react';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="px-5">

      <div>
        <p className="pe-2">© 2024 fakebnb, Inc</p>
        <span>.</span>
        <p className="mx-2">
          {t('foot.terms')}
        </p>
        <span>.</span>
        <p className="mx-2">{t('foot.sitemap')}</p>
        <span>.</span>
        <p className="mx-2">{t('foot.privacy')}</p>
      </div>

      <div className="bold-text">
        <p className="mx-2">{t('foot.lang')}</p>
        <p className="mx-2">€ EUR</p>
        <p className="mx-2">{t('foot.support')}</p>
      </div>

    </footer>
  );
}

export default Footer;
