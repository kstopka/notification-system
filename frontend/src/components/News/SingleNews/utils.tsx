export const getDate = (value: string) => {
  const date = new Date(value);

  const dzien = date.getDate();
  const miesiac = date.getMonth() + 1;
  const rok = date.getFullYear();
  const godzina = date.getHours();
  const minuta = date.getMinutes();

  return `${dzien < 10 ? "0" : ""}${dzien}-${
    miesiac < 10 ? "0" : ""
  }${miesiac}-${rok} ${godzina < 10 ? "0" : ""}${godzina}:${
    minuta < 10 ? "0" : ""
  }${minuta}`;
};
