function sortArray(array, order='asc')
{
    if (order==='asc')
    {
        return array.sort(function (a,b)
        {
        return a-b;
        });
    }
    else if(order === 'desc') {
      return array.sort(function(a, b) {
        return b - a;
      });
    } else {
      return 'Invalid order';
    }
  }
  
  const myArray = [4, 9, 2, 6, 5, 8, 1, 7, 3];
  
  const ascendingArray = sortArray(myArray, 'asc');
  console.log(ascendingArray);
  
  const descendingArray = sortArray(myArray, 'desc');
  console.log(descendingArray);
  