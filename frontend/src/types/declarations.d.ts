declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.scss" {
  const contents: string;
  export = contents;
}

declare module "*.html" {
  const contents: string;
  export = contents;
}
