module.exports = {

  letterGrader: function(score){
    if (score <= 100 && score >= 93){
      return "A";
    } else if (score < 93 && score >= 90){
      return "A-";
    } else if (score < 90 && score >= 87){
      return "B+";
    } else if (score < 87 && score >= 83){
      return "B";
    } else if (score < 83 && score >= 80){
      return "B-";
    } else if (score < 80 && score >= 77){
      return "C+";
    } else if (score < 77 && score >= 73){
      return "C";
    } else if (score < 73 && score >= 70){
      return "C-";
    } else if (score < 70 && score >= 67){
      return "D+";
    } else if (score < 67 && score >= 60){
      return "D";
    } else if (score < 60){
      return "F";
    }
  },

  averageScore: function(scores){
    return (scores.reduce(function(prev, curr){
      return prev + curr;
    },0)) / scores.length;
  },

  medianScore: function(scores){
    var result;
    if (scores.length % 2 == 0){
      result = ((scores[scores.length/2] + scores[scores.length/2-1]) / 2);
    } else if (scores.length % 2 !== 0) {
      result = scores[(scores.length-1)/2];
    }
    return result;
  },

  modeScore: function(array){
    var modeMap = {};
    var max = 0;
    var mode = 0;
    var output;
    array.forEach(function(score){
        if(modeMap[score] == null){     // if score is not found in modeMap object...
            modeMap[score] = 1;         // add the score as a property and initialize its value at 1
        } else {                        // otherwise, this score already exists, in which case...
            modeMap[score]++;           // increment its "count" value.
        }
        if(modeMap[score] > max){       // if modeMap appears more than the current max...
            max = modeMap[score];       // make it the new max value.
        }
    });

    for (var property in modeMap){     // loop through the properties in the modeMap object...
        if(modeMap[property] > mode){  // if the value (score) is greater than the current mode, initialized at 0...
            mode = modeMap[property];  // make it the new mode

        }
    }

    for (var property in modeMap){     // loop through properties again...
        if(modeMap[property] === mode){// if the value of the current property iteration equals the mode...
            output = property;         // set the output equal to that property (score).   
        }
    }
    return Number(output);             // return the mode score and force it to a number.
  }

}