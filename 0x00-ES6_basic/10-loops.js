export default function appendToEachArrayValue(array, appendString) {
    var num = 0
    for (const ar of array) {
        array[num] = appendString + ar;
        num += 1;
    }
  
    return array;
  }
