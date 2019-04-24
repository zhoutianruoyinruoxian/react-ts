export default function necessary(param: any) {
  if (!param) throw new Error(`param '${param}' is required but not found!`);
};
