// Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

const months = ['Jan', 'March', 'April', 'June']
months.splice(1, 0, 'Feb')
// Replaces no element (0) at index 1 with Feb. 
console.log(months) 
// ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May')
// Replaces 1 element at index 4 with May.

console.log(months)
// ["Jan", "Feb", "March", "April", "May"]