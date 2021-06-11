import { greetings } from '../src/greetings'

test('greetings', () => {
  expect(greetings('Mark')).toBe('Hello Mark!')
})
