export interface Image {
  src: string;
  alt: string | '';
}

export interface ImageWithId extends Image {
  id: string;
}

export interface Icon {
  src: string;
  alt: string;
  href: string;
}
