function amicablePairsUpTo(maxNum) {
    let pairs=[];
    let divisorsSum;
    let divisorsSumSecond;
    let boundary;
    for(let i=2;i<maxNum;i++)
    {
       divisorsSum=1
       divisorsSumSecond=1
       boundary=i
      for(let j=2;j<boundary;j++)
      {
        if(i%j==0)
        {
          divisorsSum+=j
          divisorsSum+=i/j
          boundary=i/j
        }
      }
      boundary=divisorsSum
      for(let j=2;j<boundary;j++)
      {
        if(divisorsSum%j==0)
            {
              divisorsSumSecond+=j
              divisorsSumSecond+=divisorsSum/j
              boundary=divisorsSum/j
            }
      }
      if(i==divisorsSumSecond && i!=divisorsSum)
      {
        pairs.push([i,divisorsSum])
      }
    
    }
    return pairs.filter((el,i)=>i%2==0 || 0)
 }
 