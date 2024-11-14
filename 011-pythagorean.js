class PythagoreanFinder {
    #numbers;
    // #getRange(low,high){
    //   return new Array(high-low+1).fill(low).map((el,index)=>el+index)
    // };
    constructor(rangeArray){
    this.#numbers=rangeArray
    }
    #findArithmeticMean (){
       return (this.#numbers.reduce((acc,el)=>acc+el,0))/this.numbersSize
    }
    #findGeometricMean(){
       const product= this.#numbers.reduce((acc,el)=>acc*el,1)
       return Math.pow(product,(1/this.numbersSize))
    }
    #findHormonicMean(){
        const reciprocalSum=this.#numbers.reduce((acc,el)=>acc+(1/el),0)
        return this.numbersSize/reciprocalSum
    }
    #yesOrNo(){
        const bool= (this.arithmeticMean >= this.geometricMean && this.geometricMean>=this.harmonicMean)
        return bool ? 'yes':'no'
    }
    get numbers(){
        return this.#numbers
    }
    get numbersSize(){
        return this.#numbers.length
    }
    get arithmeticMean(){
        return this.#findArithmeticMean()
    }
    get geometricMean(){
        return this.#findGeometricMean()
    }
    get harmonicMean(){
        return this.#findHormonicMean()
    }
   get result(){
      return {
        values:{
            Arithmetic:this.arithmeticMean,
            Geometric:this.geometricMean,
            Harmonic:this.harmonicMean
        },
        test:`is A >= G >= H ? ${this.#yesOrNo()}`
      }
   }
  }
  function pythagoreanMeans(rangeArr) {
    const pyth=new PythagoreanFinder(rangeArr)
  return pyth.result
  }
  console.log(pythagoreanMeans([1,2,3,4,5,6,7,8,9,10]))
  //hi how are you doing what do you like 