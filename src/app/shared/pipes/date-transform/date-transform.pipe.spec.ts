import { DateTransformPipe } from './date-transform.pipe';

describe('DateTransformPipe', () => {
  it('create an instance', () => {
    const pipe = new DateTransformPipe();
    expect(pipe).toBeTruthy();
  });

  it('transform 1715657514000 should be 14.05.2024 10:31', () => {
    const pipe = new DateTransformPipe();
    expect(pipe.transform(1715657514000)).toBe('14.05.2024 10:31');
  });
});
