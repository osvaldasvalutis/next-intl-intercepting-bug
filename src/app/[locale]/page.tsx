import {useTranslations} from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

import { Link } from '../../routing';

type Props = {
  params: {locale: string};
};

export default function IndexPage({ params: { locale }}: Props) {
  unstable_setRequestLocale(locale);

  const t = useTranslations('IndexPage');
  
  return (
    <div>
      <h1>{t('title')}</h1>

      <p><Link href="/newsletter">Newsletter</Link></p>
    </div>
  );
}
