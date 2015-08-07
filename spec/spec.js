var code = require('../grader.js');

describe('letterGrader', function(){
  it('takes a test score and returns the equivalent letter grade', function(){
    expect(code.letterGrader(95)).toEqual("A");
    expect(code.letterGrader(90)).toEqual("A-");
    expect(code.letterGrader(87)).toEqual("B+");
    expect(code.letterGrader(84)).toEqual("B");
    expect(code.letterGrader(82)).toEqual("B-");
    expect(code.letterGrader(79)).toEqual("C+");
    expect(code.letterGrader(76)).toEqual("C");
    expect(code.letterGrader(71)).toEqual("C-");
    expect(code.letterGrader(69)).toEqual("D+");
    expect(code.letterGrader(66)).toEqual("D");
    expect(code.letterGrader(59)).toEqual("F");
  });
});