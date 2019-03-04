
  export interface StringValidator {
    isAcceptable(s: string): boolean;
  }

  let lettersRegexp = /^[A-Za-z]+$/;
  let numberRegexp = /^\d+$/;

  export class LetterOnlyValidator implements StringValidator {
    isAcceptable(s: string) {
      return lettersRegexp.test(s);
    }
  }

  export class ZipCodeValidator implements StringValidator {
    isAcceptable = (s: string) => s.length === 5 && numberRegexp.test(s);
  }

  let strings = ['hello', '98052', '101'];

  let validators: {
    [s: string]: StringValidator;
  } = {};

  validators['ZIP code'] = new ZipCodeValidator();
  validators['Letters only'] = new LetterOnlyValidator();

  for (let s of strings) {
    for (let name in validators) {
      let isMatch = validators[name].isAcceptable(s);
      console.log(`'${s} ${isMatch ? 'matches' : 'does not match'} ${name}`)
    }
  }

