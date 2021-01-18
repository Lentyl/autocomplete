// 1. Please write a function that reverses a string
const reverses = (string) =>{
    return  string.split('').reverse().join('');
 }

const output = reverses('Maniek')

// 2. Please write a function that filters out numbers from a list

const list = [1, 2, '3', 8, 'jk']

const numbersOnly = (list) =>{
    const numberList = []
     list.forEach(element => {
        if(typeof element === 'number'){
            numberList.push(element)
        }
    });
    return numberList
 }

 const output = numbersOnly(list)

// 3. Please write a function that shows the usage of closures

const outerCl = () =>{
    const a=5;

    const innerCl=()=>{
        const b=3
       console.log(a+b);
    }
    return innerCl
 }

const output = outerCl() 
output();
// 4. Please write a recursive function that flattens an list of items
// example input [[2, [4, [44,5,6]]], [4,5,6], [[2,4], 4], 5]]
// example output [2, 4, 44, 5, 6, 4, 5, 6, 2, 4, 4, 5]

const arr= [[2, [4, [44,5,6]]], [4,5,6], [[2,4], 4], 5];
   
     const recursion = (arr) =>{

        const arr2 = []

        const prevRes = (arr) =>{
            for (let i in arr){
                let element = arr[i]

                if(Array.isArray(element)){
                    prevRes(element)
                }else{
                    arr2.push(element);
                }
            }
        }
        prevRes(arr)
        return arr2
     }

    const output = recursion(arr)
    console.log(output);

// 5. Please write a function that finds all common elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['b', 4, 76]

const arr1 = ['b', 3, 4, 76, 'c', 21];
const arr2 = ['a', 'b', 4, 76, 21, 'e'];


const commonEl = (arr1, arr2) =>{
  
    return arr3 = arr1.filter(value => arr2.includes(value));
}

const output = commonEl(arr1, arr2);

console.log(output);

// 6. Please write a function that finds all different elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['a', 3, 21, 'c', 'e']

const arr1 = ['b', 3, 4, 76, 'c', 21];
const arr2 = ['a', 'b', 4, 76, 21, 'e'];


const differentEl = (arr1, arr2) =>{

    return arr3 = arr1.filter((obj)=>arr2.indexOf(obj) == -1)   
}

const output = differentEl(arr1, arr2);

console.log(output);

// 7. Please write a function that transforms an object to a list of [key, value] tuples.
// example input { color: 'Blue', id: '22', size: 'xl' }
// example output [['color', 'blue'], ['id', '22'], ['size', 'xl']]

const obj = { color: 'Blue', id: '22', size: 'xl' }
    

const objConversionToArr = (obj) =>{

    let arrObj = Object.entries(obj)

    return arrObj
}

const output = objConversionToArr(obj);

console.log(output);

// 8. Please write a function that transforms a list of [key, value] tuples to object. // reverse or task 7
// example input [['color', 'blue'], ['id', '22'], ['size', 'xl']]
// example output { color: 'Blue', id: '22', size: 'xl' }

const arr = [['color', 'blue'], ['id', '22'], ['size', 'xl']]
    

const arrConversionToObj = (arr) =>{
   
    arr =  arr.flat(1)

    return {...arr}
}

const output = arrConversionToObj(arr);

console.log(output);

// 9. Please write a function that takes two arrays of items and returns an array of tuples made from two input arrays at the same indexes. Excessive items should be dropped.
// example input [1,2,3], [4,5,6,7]
// example output [[1,4], [2,5], [3,6]]

const arr1 = [1,2,3]
const arr2 = [4,5,6,7]


const pairArr = (arr1, arr2) =>{

    const pairedArr =[]
    
    for(let i in arr1){
        const innerArr =[]
        innerArr.push(arr1[i]);
        innerArr.push(arr2[i]);
        if(innerArr.length===2){
            pairedArr.push(innerArr)
        }else{
            return pairedArr
        }
    }
    
  return pairedArr
}

const output = pairArr(arr1, arr2);

console.log(output);

// 10. Please write a function which takes a path(path is an array of keys) and object, then returns value at this path. If value at path doesn't exists, return undefined.
// example inputs ['a', 'b', 'c', 'd'], { a: { b: { c: { d: '23' } } } }
// example output '23'

const path = ['a','b','c','d']
const obj = { a: { b: { c: { d: '23' } } } }
    
    const findValue = (path, obj) => path.reduce((p,c)=>p&&p[c]||undefined,obj)

   const output = findValue(path, obj);

   console.log(output);

// 11. Please write compare function which compares 2 objects for equality.
// example input { a: 'b', c: 'd' }, { c: 'd', a: 'b' }  /// output true
// example input { a: 'c', c: 'a' }, { c: 'd', a: 'b', q: 's' }  /// output false

    const obj1 = { c: 'd', a: 'b' }
    const obj2 = { c: 'd', a: 'b' }
    

    const areIdentical = (obj1, obj2) => JSON.stringify(obj1) === JSON.stringify(obj2)
    
    const output = areIdentical(obj1, obj2);

    console.log(output);


// 12. Please write a function which takes a list of keys and an object, then returns this object, just without keys from the list
// example input ['color', 'size'], { color: 'Blue', id: '22', size: 'xl' }
// example output { id: '22' }

const arr = ['color', 'size']
const obj = { color: 'Blue', id: '22', size: 'xl' }
    

    const deletingValues = (arr, obj) =>{

        for(let i in arr){
          delete obj[arr[i]]
        }
        
     return obj
    }

   const output = deletingValues(arr, obj);

   console.log(output);



