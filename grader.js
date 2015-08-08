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
    }

}