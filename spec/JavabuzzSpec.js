describe('Javabuzz', function() {

  var javabuzz;

  beforeEach(function(){
    javabuzz = new Javabuzz();
  });


  describe('knows when a number is', function() {

      it('divisible by 3', function(){
        expect(javabuzz.isDivisibleByThree(3)).toBe(true);
      });
  });
  describe('knows when a number is NOT',function() {

      it('divisible by 3', function(){
        expect(javabuzz.isDivisibleByThree(1)).toBe(false);

      });

    });
    describe('it returns "java" when divisible by 3', function(){

      it('it returns "java"', function(){

        expect(javabuzz.says(3)).toEqual("java");

      });
    });
    describe('it returns "buzz" when divisble by 5', function() {

        it('returns "buzz"', function(){

          expect(javabuzz.says(5)).toEqual('buzz');
        });
    });
    describe('it returns "fizzbuzz" when divisble by 15', function(){
        it('returns fizzbuzz', function(){
          expect(javabuzz.says(15)).toEqual('javabuzz');
        });
    });

  });
