type NS = number | string;
interface Fooprop {
  (title: NS): NS;
}
declare const test: Fooprop;
export default test;

// declare namespace test {
//   interface funcAbcSign {
//       (s: string): string
//   }

//   export let abc: funcAbcSign;
// }


// 命名空间
declare namespace Models {
  type A = number
  // 子命名空间
  namespace Config {
    type A = object
    type B = string
  }
}

type C = Models.Config.A