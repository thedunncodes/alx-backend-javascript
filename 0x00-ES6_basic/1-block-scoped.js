export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    try {
      task = true;
      task2 = false;
    } 
    catch (error) {
      return [task, task2];
    }
  }

  return [task, task2];
}
