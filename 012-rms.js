class RootMeanSquare{
    #elements
    constructor(elements){
      this.#elements=elements
    }
    #elementsSquareSum(){
     return this.#elements.reduce((acc,el)=>acc+(el*el),0)
    }
    #calculateRMS(){
      return Math.pow((this.#elementsSquareSum()/this.#elements.length),1/2)
    }
    get RMS(){
      return this.#calculateRMS()
    }
  }
  function rms(arr) {
   const rmsObj=new  RootMeanSquare(arr)
   return rmsObj.RMS
  }