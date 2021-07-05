import _ from 'lodash';
import numRef from '../ref.json';

export function numToWord(num) {
  return _.reduce(
    numRef,
    (accum, ref) => {
      return ref.num === num ? ref.word : accm;
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
