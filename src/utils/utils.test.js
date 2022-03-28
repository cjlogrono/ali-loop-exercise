import { checkKeyValue } from '.';

describe('checkKeyValue', () => {
  const object = {
    name: 'cj'
  };

  it('returns object', () => {
    expect(checkKeyValue(object, 'name')).toBe('cj');
  });

  it('returns null b/c wrong key', () => {
    expect(checkKeyValue(object, 'surname')).toBe(null);
  });

  it('returns null b/c value null', () => {
    expect(checkKeyValue({ name: null }, 'name')).toBe(null);
  });

  it('returns null b/c value undefined', () => {
    expect(checkKeyValue({ name: undefined }, 'name')).toBe(null);
  });

  it('returns null b/c value empty string', () => {
    expect(checkKeyValue({ name: '' }, 'name')).toBe(null);
  });

  it('returns null b/c value empty string with spaces', () => {
    expect(checkKeyValue({ name: '   ' }, 'name')).toBe(null);
  });
});
