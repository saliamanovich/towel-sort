
// You should implement your task here.

module.exports = function towelSort (matrix) {
 if (matrix===undefined){return []};
  let result = matrix.map (function (item, index){
     
     return index%2 !==0 ? item.reverse() : item;
   
   
  })
  return result.reduce((acc, val) => acc.concat(val), []);
 

 
}
