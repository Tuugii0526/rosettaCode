function isBalanced(str) {
    const checks=[]
    for(let i=0;i<str.length;i++)
    {
      if(str[i]=='[')
      {
        checks.push(i) 
        continue
      }
      if(str[i]==']' )
      {
        if(!checks.length && i<str.length)
        {
          return false
        }
        else {
        checks.pop()
        }
      }
    }
    return checks.length==0
   }
   isBalanced("[]]]")