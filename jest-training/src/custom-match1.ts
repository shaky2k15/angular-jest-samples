declare global {
    namespace jest {
      interface Matchers<R> {
        toBeSameMoment(expected: moment.Moment): CustomMatcherResult;
            
            }}}


export {}

expect.extend({
  toBeSameMoment(received: moment.Moment, expected: moment.Moment): jest.CustomMatcherResult {
    const pass: boolean = received.isSame(expected);
    const message: () => string = () => pass ? "" : `Received moment (${received.toISOString()}) is not the same as expected (${expected.toISOString()})`;

    return {
      message,
      pass,
    };
  },
});
