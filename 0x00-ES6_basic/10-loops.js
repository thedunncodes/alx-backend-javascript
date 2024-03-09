export default function appendToEachArrayValue(array, appendString) {
    let num = 0
    for (const ar of array) {
        array[num] = appendString + ar;
        num += 1;
    }
  
    return array;
}
