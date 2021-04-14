namespace Quantum.ionqTest {

    open Microsoft.Quantum.Canon;
    open Microsoft.Quantum.Intrinsic;
    open Microsoft.Quantum.Diagnostics;
    open Microsoft.Quantum.Convert;
    open Microsoft.Quantum.Math;
    
    internal function OddFactorialL(n : Int) : BigInt {
     mutable acc = 1L;
     for i in 1..2..n {
          set acc *= IntAsBigInt(i);
     }
     return acc;
}


    internal function EveFactorialL(n : Int) : BigInt {
     mutable acc = 1L;
     for i in 2..2..n {
		 set acc *= IntAsBigInt(i);
     }
     return acc;
}
    function FactorialL(n : Int) : BigInt{
        let eve = EveFactorialL(n);
        let odd = OddFactorialL(n);
        return eve * odd;
    }

    /// SEND THIS BAD BOI TO THE CONVERT 
    function BigIntAsString(a : BigInt) : String{
         return $"{a}";
    }




        /// # Summary
    /// Returns a factorial as a BigInt.
    ///
    /// # Description
    /// Returns the factorial as Big Integer, given an input of $n$ as an Integer.
    ///
    /// # Input
    /// ## $n$
    /// A whole number of any size, positive or negative.
    ///
    /// # Output
    /// The factorial of the provided input with the type BigInt.
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


    @EntryPoint()
    operation AllocateQubit () : Unit {
        
        mutable x = 1L;
        for t in 0..10..1000{
            set x = FactorialL(t);
            Message(BigIntAsString(x));
        }

        Message("Test Complete");

    }
}

