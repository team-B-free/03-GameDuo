import enterCheck from '../../modules/enter-check.js';
describe('enterCheck의 함수 테스트', () => {
  test('enterCheck의 파라미터 값이 1이면 true, 0이면 false이다', () => {
    expect(enterCheck(1)).toBeTruthy();
    expect(enterCheck(0)).toBeFalsy();
  });
});
