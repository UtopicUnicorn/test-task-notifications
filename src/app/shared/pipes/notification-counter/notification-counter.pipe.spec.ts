import { NotificationCounterPipe } from './notification-counter.pipe';

describe('NotificationCounterPipe', () => {
  const pipe = new NotificationCounterPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transform 99 to string', () => {
    expect(pipe.transform(99)).toBe('99');
  });
  it('transform 110 to be 99+', () => {
    expect(pipe.transform(110)).toBe('99+');
  });
});
