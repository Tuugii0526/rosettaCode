function getFinalOpenedDoors(numDoors) {
    const doors=Array.from({length:numDoors},(_,i)=>({
      number:i+1,
      isOpen:false
    }))
    let count=1
    while(count<=numDoors)
    {
      for(let i=count;i<=numDoors;i+=count)
      {
        doors[i-1].isOpen=!(doors[i-1].isOpen)
      }
      count++
    }
    return doors.filter((door)=>door.isOpen).map(door=>door.number)
  
  }
  console.time('time')
  getFinalOpenedDoors(100)
  console.timeEnd('time')