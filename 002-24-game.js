function solve24(numStr) {
  const nums = numStr.split("").map((num) => parseInt(num));
  const objects = nums.map((num) => ({
    value: num,
    script: String(num),
  }));
  const solution= Array.from(new Set(getSolution(objects)));
  if(!solution.length)
  {
    return "no solution exists"
  }
  return solution
}
function getSolution(nums) {
  if (nums.length === 1) {
    if (nums[0]?.value === 24) {
      return [nums[0].script];
    } else {
      return [];
    }
  }

  let solution=[]
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if(i==j)
      {
        continue
      }
      const remainingElements = [];
      for (let k = 0; k < nums.length; k++) {
        if (k != i && k != j) {
          remainingElements.push(nums[k]);
        }
      }
      for (const object of computeTwoNumbers(nums[j], nums[i])) {
         const subSolution = getSolution([...remainingElements, object]);
        solution.push(...subSolution)
      }
    }
  }
  return solution
}
function computeTwoNumbers(objectA, objectB) {
  const a = objectA?.value;
  const b = objectB?.value;
  const scriptA = objectA?.script;
  const scriptB = objectB?.script;
  const returnArray = [];
  const functions = {
    "-": (a, b) => [a - b, b - a],
    "+": (a, b) => [a + b],
    "*": (a, b) => [a * b],
    "/": (a, b) => [a / b, b / a],
  };
  for (const property in functions) {
    const values = functions[property](a, b);
    const tempObjects = [
      {
        value: values[0],
        script: `(${scriptA}${property}${scriptB})`,
      },
    ];
    if (values[1]) {
      tempObjects.push({
        value: values[1],
        script: `(${scriptB}${property}${scriptA})`,
      });
    }
    returnArray.push(...tempObjects);
  }
  return returnArray;
}

console.log(solve24("1265"));