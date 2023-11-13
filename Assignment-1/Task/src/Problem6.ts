{
    const sumArrayNumbers=(array: unknown): any =>{

        if (Array.isArray(array) && array.every((num) => typeof num === 'number')) {

          const sum = array.map(Number).reduce((previous, next) => previous + next, 0);
          console.log('Number Array sum is :', sum);
          
        }
        
        else {
          console.error('It is not numbers array');
        }

        
      }

      
      
      const numberArray = [5,5,5,5];
      const notNumberArray = [1,2,'a','b'];
      
      sumArrayNumbers(numberArray); 
      sumArrayNumbers(notNumberArray); 
      

}