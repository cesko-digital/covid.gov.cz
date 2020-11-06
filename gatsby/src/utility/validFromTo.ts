import I18n from '@/components/i18n';

const validFromTo = (validFrom: string, validTo: string) =>
  `${validFrom ? `${I18n('from')} ${validFrom} ` : ''}${
    validTo ? `${I18n('to')} ${validTo}` : ''
  }`;

export default validFromTo;
