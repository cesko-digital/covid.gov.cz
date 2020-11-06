//  TODO: Localize
const validFromTo = (validFrom: string, validTo: string) =>
  `${validFrom ? `Od ${validFrom} ` : ''}${validTo ? `Do ${validTo}` : ''}`;

export default validFromTo;
