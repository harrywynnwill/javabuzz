var Javabuzz = function(){};

Javabuzz.prototype.isDivisibleByThree = function (number) {
  return this._isDivisibleBy(number, 3);
};

Javabuzz.prototype.isDivisibleByfive = function (number) {
  return this._isDivisibleBy(number, 5);
};
Javabuzz.prototype.isDivisibleByfifteen = function (number) {
  return this._isDivisibleBy(number, 15);
};



Javabuzz.prototype.says = function (number) {
  if (this.isDivisibleByfifteen (number)){
    return "javabuzz";
  }
  if (this.isDivisibleByThree (number)) {
    return "java";
  }
  if (this.isDivisibleByfive (number)){
    return "buzz";
  }
  else {
  return number;
  }
};



Javabuzz.prototype._isDivisibleBy = function (number, divisor) {
  return (number % divisor === 0);
};
