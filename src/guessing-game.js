class GuessingGame {
    constructor(start, end) {
      this.start;
      this.end;
    }
    
    setRange(min, max) {
      this.start = min;
      this.end = max;
    } 
    
    guess() {
      return Math.round((this.end + this.start)/2);
      
    }
  
  lower() {
    this.end = Math.round((this.end + this.start)/2);
  }
    greater() {
      this.start = Math.round((this.end + this.start)/2);
    }
  }
module.exports = GuessingGame;
