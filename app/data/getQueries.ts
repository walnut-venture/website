import { useLocale } from "next-intl";

const getQuery = (queryName: string, locale: string) => {
  return `query {
    ${queryName}Collection (locale: "${locale}") {
      items {
        ${queryName === 'aboutUs' ? 'title, firstSubtitle ' : ''}
        ${queryName === 'career' ? 'title, firstSubtitle, secondSubtitle, thirdSubtitle, firstImage { url }, secondImage { url }, thirdImage { url }, fourthImage { url }' : ''}
        ${queryName === 'contactUs' ? 'title, subtitle, button, name, phoneNumber, message' : ''}
        ${queryName === 'drivingInnovation' ? 'title, firstSubtitle, secondSubtitle, image { url }' : ''}
        ${queryName === 'employee' ? 'name, linkedinLink, specialty, firstSubtitle, secondSubtitle, thirdSubtitle, image { url } order' : ''}
        ${queryName === 'footer' ? 'title, copyright, cookieBanner' : ''}
        ${queryName === 'joinUs' ? 'title, firstSubtitle, secondSubtitle, button, image { url }' : ''}
        ${queryName === 'methodology' ? 'title, firstBlockSubtitle, secondBlockSubtitle' : ''}
        ${queryName === 'methodologyCard' ? 'title, firstSubtitle, secondSubtitle, thirdSubtitle, fourthSubtitle, phaseSubtitle, order' : ''}
        ${queryName === 'navigation' ? 'title, order' : ''}
        ${queryName === 'ourServicesInDetail' ? 'title, image { url }, order' : ''}
        ${queryName === 'services' ? 'title, subtitle, text, image { url }, order' : ''}
        ${queryName === 'showMoreButton' ? 'showMore, showLess' : ''}
        ${queryName === 'walnutContent' ? 'title, outlineTitle, subtitle, button, video { url }' : ''}
        ${queryName === 'whoWeAre' ? 'title, subtitle, text, order' : ''}
      }
    }
  }`;
};

export const GetQueries = () => {
  const locale = useLocale();

  type QueryObject = {
    [key: string]: string;
  };

  const queries = [
    'aboutUs',
    'career',
    'contactUs',
    'drivingInnovation',
    'employee',
    'footer',
    'joinUs',
    'methodology',
    'methodologyCard',
    'navigation',
    'ourServicesInDetail',
    'services',
    'showMoreButton',
    'walnutContent',
    'whoWeAre'
  ];

  const queryObjects: QueryObject = {};

  queries.forEach(queryName => {
    queryObjects[queryName] = getQuery(queryName, locale);
  });

  return queryObjects;
};
