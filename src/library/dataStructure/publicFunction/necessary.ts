export default function necessary(param: string) {
  if (!param) throw new Error(`paramter '${param}' is required but not found!`);
};
