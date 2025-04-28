import ca from './ca.json';
import es from './es.json';

const LANGUAGES = {
  CATALAN: 'ca',
  SPANISH: 'es',
}

export const getI18n = (locale?: string) => {
  if (locale === LANGUAGES.CATALAN) return ca;

  return es;
}