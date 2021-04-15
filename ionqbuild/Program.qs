namespace Quantum.ionqbuild {

    open Microsoft.Quantum.Canon;
    open Microsoft.Quantum.Intrinsic;
    open Microsoft.Quantum.Diagnostics;
    open Microsoft.Quantum.Convert;
    open Microsoft.Quantum.Math;
    


    /// # Summary
    /// Given an 'Int', this function returns a factorial as a 'BigInt'.
    ///
    /// # Description
    /// Returns the factorial as Big Integer, given an input of $n$ as an Integer.
    /// This function does not use approximation. If speed is required, use 'FactorialD'
    ///
    /// # Input
    /// ## $n$
    /// A whole number of any size, positive or negative.
    ///
    /// # Output
    /// The factorial of the provided input with the type BigInt
    ///
    /// # See Also
    /// - Microsoft.Quantum.Math.FactorialD
    function FactorialL(n : Int) : BigInt
    { 
        mutable Direction = 1L;
        mutable Ans = 1L;
        let GivenValue = AbsI(n);

        if n < 0{
            set Direction = -1L;
        }
        if GivenValue == 0{
            return 1L;
        }
        elif GivenValue == 1{
            return 1L;
        }
        else{
            let Eve = EveFactorialL(GivenValue);
            let Odd = OddFactorialL(GivenValue);
            set Ans = Eve * Odd * Direction;
        }
        return Ans;
    }

    internal function OddFactorialL(n : Int) : BigInt
    {
     mutable acc = 1L;
     for i in 1..2..n {
          set acc *= IntAsBigInt(i);
     }
     return acc;
    }

    internal function EveFactorialL(n : Int) : BigInt
    {
     mutable acc = 1L;
     for i in 2..2..n {
		 set acc *= IntAsBigInt(i);
     }
     return acc;
    }




    /// # Summary
    /// Returns a factorial of a given number.
    ///
    /// # Description
    /// Returns the factorial as 'Double', given an input of $n$ as a 'Double'.
    /// The domain of inputs for this function is 20.0 < n < 170.0.
    /// Function uses the Ramanujan Approxomation with a relative error to the order of 1/n^5
    ///
    /// # Input
    /// ## $n$
    /// A 'Double' between 20.0 < n < 170.0.
    /// Negatives are accepted.
    ///
    /// # Output
    /// The factorial of the provided input with the datatype 'Double'.
    /// Large numbers are returned in scientific notation. Example: '8.320987112732955E+81'
    ///
    /// # See Also
    /// - Microsoft.Quantum.Math.FactorialL
    function FactorialD(n : Double) : Double
    {
        let GivenInt = AbsD(n);
        mutable Direction = 1.0;
        mutable TradLoop = 1.0;
        mutable ans = 1.0;
        
        if n < 0.0 {
            set Direction = -1.0;
        }
        if GivenInt <= 30.0{
            fail "FactorialD uses aproxomation. It is recommended to use FactorialI for factorials less than 20";
        }
        elif GivenInt >= 170.0{
            fail "FactorialD will return infinity for numbers larger than 170! Recommend using FactorialL";
        }
        else{
        let a = Sqrt(2.0*PI()*GivenInt);
        let b = ((GivenInt /E())^GivenInt);
        let c = (E()^((1.0/(12.0*GivenInt)) - (1.0 /(360.0*(GivenInt^3.0)))));
        set ans = a*b*c*Direction;
        }
       return ans;
   }




    


    /// # Summary
    /// Converts a given integer number to an equivalent string representation.
    ///
    /// # Description
    /// Returns a string given a BigInt.
    ///
    /// # Input
    /// ## $n$
    /// BigInt
    ///
    /// # Output
    /// String
    function BigIntAsString(a : BigInt) : String
    {
         return $"{a}";
    }












// Old factorial bigint for testing
    function OldFactorialL(n : Int) : BigInt
    {
        mutable an = 1;
        mutable x = IntAsBigInt(1);
        if (n < 0 ){
            set an = AbsI(n);
            set x = IntAsBigInt(-1);
        }
        elif(n == 0){
            return x;
        }
        else{
            set an = n;
        }
        for i in  1 .. an {
            set x = x * IntAsBigInt(i);
        }
       return x;
    }














/// TEST FUNCTIONS
// Loops through a series of numbers to calculate the value of the factorial.
    function TestPerformanceNew (max : Int) : Unit
    {
            mutable x = 1L;
            for t in 0..5..max{
            set x = FactorialL(t);
            Message(BigIntAsString(x));
        }
        }

    function TestPerformanceOld (max : Int) : Unit
    {
            mutable x = 1L;
            for t in 0..5..max{
            set x = OldFactorialL(t);
            Message(BigIntAsString(x));
		}
    }


        function TestPerformanceAprox (max : Int) : Unit
    {
            mutable x = 1.0;
            for t in 0..5..max
            {
				set x = FactorialD(IntAsDouble(t));
            Message(DoubleAsString(x));
		    }
    }






    // Given the factorial to be examined as an Int and a pre-calculated value for the factorial as a string.
    // This function compares the two values. If a match, the test Passes. Otherwise the test fails and will compare the two values for you to review.
    function TestAccuracy (var : Int, ans : String) : Unit
    {
        let ret = BigIntAsString(FactorialL(var));
        if ans == ret{
            Message("Pass");
        }
        else{
            Message("Fail");
            Message("Found Answer: " + ret);
            Message("Given Answer: " + ans);

            fail "not accurate";
        }
        Message("Test Complete");
    }



    //function FactorialPoorman(n : Int) : BigInt
    //{

    //}


    @EntryPoint()
    operation AllocateQubit () : Unit {
        
// Test: Increments of 5 up to 3000 numbers. Or 600 loops.
// Old Factorial:  3.719
// New Factorial:  3.677

// Test: Increments of 5 up to 4000 numbers. Or 800 loops.
// Old Factorial:  4.106
// New Factorial:  3.394

// Test: Increments of 5 up to 5000 numbers. Or 1000 loops.
// Old Factorial:  7.884
// New Factorial:  7.085
//
 

// Test: Increments of 5 up to 6000 numbers. Or 1200 loops.
// Old Factorial:  11.857
// New Factorial:  10.695
// Poorman? 23.009


/// NOTE:  The devide and conquor algo ended up being the most efficent after trying the PoorMan and the traditional recursive loop.
  
// Test: Aproxomation only goes to 170! After that it returns infinity.

    // TODO: create max limit to double.
	// TODO: Create pull request for BigIntAsString

        //let var = 321;
        //let ans = "6792691744573800470287851701859191869473079153788737947175048348000566996201075565883634067117697871971951788620081790897833975117872915098411594472966982434784667390565661825534997069369223181107508369736925738136722506332041830092581043853551806637709746119945430430888089110650345057107426224932943371803396277440074116196619232116926339614128696341204992520108400256503261237155571285404597604616847357620275685214063161701206402885960985439459427543149541465184526566990650415696495063334653541359881356653476671738544347224622640956514758437414180328510235242923530479206058818535424000000000000000000000000000000000000000000000000000000000000000000000000000000";
        //TestAccuracy(var, ans);

      //let max = -165.0;
      //Message(DoubleAsString(FactorialD(max)));

      Message(BigIntAsString(FactorialL(-300)));

      ///// LOOP TESTS
      //TestPerformanceOld(max);
      //TestPerformanceAprox(max);

    }
}