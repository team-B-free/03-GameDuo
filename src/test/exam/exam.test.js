/**
 * @author 박성용
 * @version 1.0 22.07.15 테스트 예시 코드 작성
 */

import { timestable, getDay } from './test-modules.js';

describe('Jest Test', () => {
  const str = 'Hello World';
  test('Welcome Jest!', () => {
    expect(str).toBe('Hello World');
  });

  let num;
  beforeEach(() => (num = 10));

  test('num은 10과 같습니다', () => {
    expect(num).toBe(10);
  });

  test('num은 홀수가 아닙니다', () => {
    const isOdd = (num) => {
      return num % 2 === 0 ? 'Even' : 'Odd';
    };
    expect(isOdd(num)).toBe('Even');
  });
});

describe('toBe와 toEqual의 차이', () => {
  test('값이 같은지 비교하려면 toBe(===)을 사용합니다', () => {
    const data = { one: 1 };
    data['two'] = 2;
    expect(data).toEqual({ one: 1, two: 2 });
  });

  test('객체의 값이 같은지 비교하려면 toEqual(Deep compare)을 사용합니다', () => {
    const data = { one: 1 };
    data['two'] = 2;
    expect(data).toEqual({ one: 1, two: 2 });
    expect({ name: 'B-Free' }).toEqual({ name: 'B-Free' });
  });
});

describe('다른 파일로 부터 모듈를 테스트 합니다', () => {
  test('구구단 2*4는 8입니다', () => {
    expect(timestable(2, 4)).toBe(8);
  });
  test('구구단 9*7은 61이 아닙니다', () => {
    expect(timestable(9, 7)).not.toBe(61);
  });
});

describe('true와 false를 테스트 합니다', () => {
  test('2022년 7월 15일은 금요일 입니다(true)', () => {
    expect(getDay('2022-07-15')).toBeTruthy();
  });
  test('2022년 7월 15일은 금요일이 아닙니다(false)', () => {
    let checkDay = getDay('2022-07-15') !== '금요일';
    expect(checkDay).toBeFalsy();
  });
});

describe('여러 개의 파라미터화 테스트 케이스를 테스트합니다', () => {
  test.each([
    [2, 3, 6],
    [4, 5, 20],
    [9, 9, 81],
    [8, 6, 48],
  ])('%s * %s는 %s 입니다', (num1, num2, result) => {
    expect(timestable(num1, num2)).toBe(result);
  });
});
