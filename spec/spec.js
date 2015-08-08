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

describe('averageScore', function(){
  it('takes an array of test scores and returns the average score', function(){
    var scores = [90, 95, 87, 60];
    expect(code.averageScore(scores)).toEqual(83);
  });
});

describe('medianScore', function(){
  it('takes an odd array of test scores and returns the middle value', function(){
    expect(code.medianScore([1,3,5,6,9])).toEqual(5);
  });

  it('takes an even array of test scores and returns the average of the middle values', function(){
    expect(code.medianScore([23,45,67,89,96,99])).toEqual(78);
    expect(code.medianScore([1,4,7,9,12,15,25,46])).toEqual(10.5);
  })
})

describe('modeScore', function(){
  it('takes an array of numbers and returns the number that appears most', function(){
    expect(code.modeScore([82, 92, 75, 91, 92, 89, 95, 100, 86])).toEqual(92);
  })
})