import { throwError, resolveValue } from './index';

describe('resolveValue', () => {
  test('should resolve provided value', async () => {
    await expect(resolveValue(5)).resolves.toBe(5);
  });
});

describe('throwError', () => {
  test('should throw error with provided message', () => {
    const msg = 'TxtMsg';
    expect(throwError(msg)).toBe(Error(msg));
  });

  test('should throw error with default message if message is not provided', () => {
    //expect(throwError()).toThrowError(new Error('Oops!'));
  });
});

describe('throwCustomError', () => {
  test('should throw custom error', () => {
    //expect(throwCustomError()).rejects.toThrowError(MyAwesomeError);
  });
});

describe('rejectCustomError', () => {
  test('should reject custom error', async () => {
    //await expect(rejectCustomError()).rejects.toThrowError(MyAwesomeError);
  });
});
