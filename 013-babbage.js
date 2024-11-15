function babbage(babbageNum, endDigits) {
    const littleNum=Math.floor(Math.pow(endDigits,1/2))
    console.log('littleNum:',littleNum)
    let found=true
    for(let i=littleNum;found;i++)
    {
      if(String(i*i).endsWith(`${endDigits}`))
      {
        return i
      }
    }
  }
  