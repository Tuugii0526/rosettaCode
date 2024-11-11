function getDPA(num) {
    let deficient=0;
    let perfect=0;
    let abundant=0;
  for(let i=1;i<=num;i++)
  {
    let sum=0
    for(let j=1;j<i;j++)
    {
      if(i%j==0)
    {
      sum+=j
    }
    }
    if(sum<i)
    {
      deficient++
    }
    else if(sum==i)
    {
      perfect++
    }
    else
    {
      abundant++
    }
  }
  return [deficient,perfect,abundant]
  }