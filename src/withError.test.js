import { getError, isErrorCode } from './withError';

describe('withError', () => {
  describe('getError()', () => {
    test('should generate props from status code', () => {
      expect(getError(200)).toEqual({ statusCode: 200 });
    });
    test('should generate props from payload', () => {
      expect(getError({ meta: { statusCode: 200 } })).toEqual({ statusCode: 200 });
    });
    test('should generate props from data', () => {
      expect(getError({ payload: { meta: { statusCode: 200 } } })).toEqual({ statusCode: 200 });
    });
  });
  describe('isErrorCode()', () => {
    test('should be false for 200 status code', () => {
      expect(isErrorCode(200)).toEqual(false);
    });
    test('should be false for 200 payload', () => {
      expect(isErrorCode({ meta: { statusCode: 200 } })).toEqual(false);
    });
    test('should be false for 200 data', () => {
      expect(isErrorCode({ payload: { meta: { statusCode: 200 } } })).toEqual(false);
    });
    test('should be true for 400 status code', () => {
      expect(isErrorCode(400)).toEqual(true);
    });
    test('should be true for 400 payload', () => {
      expect(isErrorCode({ meta: { statusCode: 400 } })).toEqual(true);
    });
    test('should be true for 400 data', () => {
      expect(isErrorCode({ payload: { meta: { statusCode: 400 } } })).toEqual(true);
    });
  });
});
