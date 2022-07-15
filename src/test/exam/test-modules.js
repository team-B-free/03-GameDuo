/**
 * @author 박성용
 * @version 1.0 22.07.15 테스트 예시 코드 작성
 */

const timestable = (num1, num2) => {
  for (let i = num1; i <= 9; i++) {
    for (let j = num2; j <= 9; j++) {
      return i * j;
    }
  }
};

const getDay = (date) => {
  let option = {
    weekday: 'long',
  };
  let createdAtDate = new Date(date).toLocaleString('Ko-KR', option);
  let korDay = [
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
    '일요일',
  ];
  let result = korDay.filter((day) => createdAtDate === day).join();
  return result;
};

export { timestable, getDay };
