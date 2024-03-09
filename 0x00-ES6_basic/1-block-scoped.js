export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    try {
      const task = true;
      const task2 = false;
    } 
    catch (error) {};
  }

  return [task, task2];
}
