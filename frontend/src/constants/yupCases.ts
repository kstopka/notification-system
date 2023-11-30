import * as yup from "yup";

import { REGEXPS } from "./regexps";

const nameSchemeValidation = yup
  .string()
  .required("To pole jest wymagane")
  .test(
    "at least one word",
    "Pole wymaga poprawnie wprowadzonej nazwy",
    (value = "") => REGEXPS.oneOrMoreWords.test(value)
  );

const doubleTypeValidation = yup
  .string()
  .required("To pole jest wymagane")
  .test("is at least one number", "Pole wymaga liczb", (value = "") =>
    REGEXPS.doubleType.test(value)
  );

const textBlockSchemeValidation = yup
  .string()
  .required("To pole jest wymagane")
  .test(
    "at least one word",
    "Pole wymaga przynajmniej jednego słowa",
    (value = "") => REGEXPS.oneOrMoreWords.test(value)
  );

const firstNameAndSurname = yup
  .string()
  .required("To pole jest wymagane")
  .test(
    "at least two words",
    "Pole wymaga poprawnie wprowadzonego imienia i nazwiska",
    (value = "") => REGEXPS.twoOrMoreWords.test(value)
  );

const emailSchemeValidation = yup
  .string()
  .required("To pole jest wymagane")
  .email("Wpisz prawidłowy email");

const passwordSchemeValidation = yup
  .string()
  .required("To pole jest wymagane")
  .test(
    "at least one lower letter",
    "Hasło musi zawierać przynajmniej 1 małą literę",
    (value = "") => REGEXPS.atLeastOneLowerLetter.test(value)
  )
  .test(
    "at least one capital letter",
    "Hasło musi zawierać przynajmniej 1 dużą literę",
    (value = "") => REGEXPS.atLeastOneCapitalLetter.test(value)
  )
  .test(
    "is at least one number",
    "Hasło musi zawierać przynajmniej 1 cyfrę",
    (value = "") => REGEXPS.atLeastOneDigital.test(value)
  )
  // .test(
  //   'is at least one special',
  //   'Hasło musi zawierać przynajmniej 1 znak specjalny',
  //   (value = '') => REGEXPS.atLeastOneSpecial.test(value)
  // )
  .test(
    "is at least 8 chars",
    "Hasło musi zawierać minimum 8 znaków",
    (value = "") => REGEXPS.atLestEightChars.test(value)
  );

const checkboxSchemeValidation = yup
  .boolean()
  .test("is valid", "To pole jest wymagane", (value) => Boolean(value))
  .required("To pole jest wymagane");

const polishZipCodeSchemeValidation = yup
  .string()
  .required("To pole jest wymagane")
  .test(
    "zip code",
    "Kod pocztowy powinien mieć strukturę XX-XXX",
    (value = "") => REGEXPS.zipCodeDash.test(value)
    // REGEXPS.zipCode.test(value) || REGEXPS.zipCodeDash.test(value)
  );

const zipCodeSchemeValidation = yup.string().required("To pole jest wymagane");
// .test(
//   'zip code',
//   'Kod pocztowy powinien mieć strukturę XX-XXX',
//   (value = '') =>
//     REGEXPS.zipCode.test(value) || REGEXPS.zipCodeDash.test(value)
// );

const phoneSchemeValidation = yup
  .string()
  .required("To pole jest wymagane")
  .test("phone", "Niepoprawnie wpisany numer telefonu.", (value = "") =>
    REGEXPS.phoneNumber.test(value)
  );

const citySchemeValidation = yup
  .string()
  .required("To pole jest wymagane")
  .test("address", "Niepoprawnie wpisana nazwa miasta", (value = "") =>
    REGEXPS.city.test(value)
  );

const countrySchemeValidation = yup
  .string()
  .required("To pole jest wymagane")
  .test("address", "Niepoprawnie wpisana nazwa państwa", (value = "") =>
    REGEXPS.country.test(value)
  );

const addressSchemeValidation = yup
  .string()
  .required("To pole jest wymagane")
  .test("address", "Niepoprawnie wpisana nazwa adresu", (value = "") =>
    REGEXPS.address.test(value)
  );

const nipSchemeValidation = yup
  .string()
  .required("To pole jest wymagane")
  .test("nip", "Niepoprawnie wpisany numer nip", (value = "") =>
    REGEXPS.nipDash.test(value)
  );

const textArea = yup.string().required("To pole jest wymagane");

export const YUP = {
  polishZipCodeSchemeValidation,
  nipSchemeValidation,
  nameSchemeValidation,
  firstNameAndSurname,
  emailSchemeValidation,
  passwordSchemeValidation,
  checkboxSchemeValidation,
  zipCodeSchemeValidation,
  phoneSchemeValidation,
  addressSchemeValidation,
  citySchemeValidation,
  countrySchemeValidation,
  textBlockSchemeValidation,
  doubleTypeValidation,
  textArea,
};
