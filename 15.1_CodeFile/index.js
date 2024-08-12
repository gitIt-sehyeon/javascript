/** 코드의 제목으로 사용될 문자열 */
const TITLE = 'JSDoc 사용하기';

//ss

/**
 * 원주율
 * @type {number}
 * @const
 */
/**
 * 원주율
 * @const {number}
 */
const PI = '3.14';



/**
 * 
 * @param {number} x 
 * @param {number} y 
 * @returns {number} 두 수의 합
 */
const add = (x, y) => x + y;



/**
 * @typedef {Object} PersonObj 사람 객체
 * @property {string} name 이름
 * @property {number} age 나이
 * @property {boolean} married 기혼여부
 */

/**
 * 
 * @param {string} name 이름
 * @param {number} age 나이
 * @param {boolean} married 기혼여부
 * @returns {PersonObj}
 */
function getPersonObj (name, age, married) {
  return {name, age, married}
}

// 아래와 같이 정의 후 person1 사용해 볼 것
const person1 = getPersonObj('홍길동', 20, false);




/**
 * 사람 객체 생성 함수
 * @constructor 
 * @param {string} name 
 * @param {number} age 
 */
function Person (name, age) {
  this.name = name;
  this.age = age;
}



/**
 * 새 클래스
 * @class
 */
class Bird {
  /**
   * @constructs
   * @param {string} name 
   */
  constructor (name) {
    this.name = name;
 }
}



/**
 * @todo 실행 속도 개선 필요
 */
function slowFunction () {
  console.log('느릿느릿');
}


/**
 * @see {@link https://www.yalco.kr} 얄코사이트 참조
 */
function yalcoFunc () {
  // ...
}


/**
 * @readonly
 * @const {string}
 */
const READONLY = '건들지 마라';


/**
 * @deprecated 버전 3부터 안 씀
 */
function oldFunction () {
  console.warn('왜 실행했어요?');
}

