function numberOfNames(num) {
    // P(n) = Sum_k=1:n (-1)^(k+1)*(P(n-k(3k-1)/2) + P(n-k(3k+1)/2))
   const namesCount=new Array(num+1).fill(0)
   namesCount[0]=1;
   namesCount[1]=1;
   namesCount[2]=2;
   for(let n=3;n<=num;n++)
   {
     for(let k=1;k<=n;k++)
     {
        const d= n-(k*(3*k-1))/2
        if(d>=0)
        {
          let plusOrMinus=(k+1)%2==0 ? 1 :-1;
          namesCount[n]+=plusOrMinus*namesCount[d]
        }
        else {
          break
        }
        if(d-k>=0)
        {
          let plusOrMinus=(k+1)%2==0 ? 1 :-1;
          namesCount[n]+=plusOrMinus*namesCount[d-k]
        }
     }
   }
  return namesCount[num];
}