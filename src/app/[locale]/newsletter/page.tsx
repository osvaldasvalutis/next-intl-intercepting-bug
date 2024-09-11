import { unstable_setRequestLocale } from 'next-intl/server';
import {useTranslations} from 'next-intl';

type Props = {
  params: {locale: string};
};

export default function NewsletterPage({ params: { locale }}: Props) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('NewsletterPage');
  return <h1>{t('title')}</h1>;
}
