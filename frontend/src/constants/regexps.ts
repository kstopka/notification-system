const polishLowerSigns = "żźćńółęąś";
const polishCapitalSigns = "ŻŹĆĄŚĘŁÓŃ";
const polishSigns = polishLowerSigns + polishCapitalSigns;

export const REGEXPS = {
  nip: new RegExp(`^\\d{10}$`),
  nipDash:
    /^((\d{3}[- ]\d{3}[- ]\d{2}[- ]\d{2})|(\d{3}[- ]\d{2}[- ]\d{2}[- ]\d{3}))$/,
  atLeastOneLowerLetter: new RegExp(`(?=.*[a-z${polishLowerSigns}])`),
  atLeastOneCapitalLetter: new RegExp(`(?=.*[A-Z${polishCapitalSigns}])`),
  atLeastOneDigital: /(?=.*\d)/,
  atLeastOneSpecial: /(?=.*[-+_!@#$%^&*., ?])/,
  noSpecialChar: new RegExp(`^([A-Za-z0-9${polishSigns}]+)?$`),
  atLestEightChars: /^.{8,}$/,
  oneOrMoreWords: new RegExp(`^((([a-zA-Z${polishSigns}]{2,})\\s?){1,})?$`),
  twoOrMoreWords: new RegExp(
    `^([a-zA-Z${polishSigns}]{2,}( [a-zA-Z${polishSigns}]{2,}){1,})?$`
  ),
  address: new RegExp(`^((([a-zA-Z${polishSigns}\\d/-]{1,})\\s?){1,})?$`),
  city: new RegExp(`^((([a-zA-Z${polishSigns}-]{1,})\\s?){1,})?$`),
  country: new RegExp(`^((([a-zA-Z${polishSigns}-]{1,})\\s?){1,})?$`),
  phoneNumber: /^((\d){3}[ -]?(\d){3}[ -]?(\d){3})?$/,
  zipCodeDash: /^((\d){2}-(\d){3})?$/,
  zipCode: new RegExp(`^\\d{5}$`),
  doubleType: /^(?!0*[.,]?0*$)[0-9]+([.,][0-9]{1,2})?$/,
};
