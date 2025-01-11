export const classNames = (...classes: any[]) =>
  classes.filter(Boolean).map(String).join(' ');
