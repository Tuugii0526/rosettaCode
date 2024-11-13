function mode(arr) {
    const modeCount={}
    const modes=[]
    for(const element of arr)
    {
    modeCount[element] = (modeCount[element] || 0)+1
    }
    const mode=Math.max(...(Object.values(modeCount)))
    for(const property in modeCount)
    {
      if(modeCount[property]==mode)
      {
        modes.push(Number(property))
      }
    }
    return modes
    }
    mode([1, 3, 6, 6, 6, 6, 7, 7, 12, 12, 17])
    