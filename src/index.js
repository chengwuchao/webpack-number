import _ from 'lodash';
import numRef from './ref.json';

export function numToWord(num) {
  return _.reduce(
    numRef,
    (accum, ref) => {
      return ref.num === num ? ref.word : accum;
    },
    ''
  );
}

export function wordToNum() {
  return _.reduce(
    numRef,
    (accum, ref) => {
      return ref.word === word ? word.toLowerCase() : accum;
    },
    -1
  );
}
