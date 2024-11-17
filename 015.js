function getCircles(...args) {
    if(args[2]==0)
    {
      return 'Radius Zero'
    }
    const aPoint=args[0]
    const bPoint=args[1]
    const radius=args[2]
    const midPoint=[(aPoint[0]+bPoint[0])/2,(aPoint[1]+bPoint[1])/2]
    const distance=Math.pow(((aPoint[1]-bPoint[1])**2+(aPoint[0]-bPoint[0])**2),1/2)
    if(radius<distance)
    {
      return 'No intersection. Points further apart than circle diameter'
    }
     const distanceHalf=distance/2
     
  }
  