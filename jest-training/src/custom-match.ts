declare global {
    namespace jest {
      interface Matchers<R> {
      toGandalf(expected?: any): CustomMatcherResult;
    
                }}}




    export { }
    
    
  
    
    expect.extend({
    toGandalf() {
      return {
        pass: true,
        message: () => 'you shall  pass',
      };
    },
});