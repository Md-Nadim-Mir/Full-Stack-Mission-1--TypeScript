{

     const mixedData = [1, 'two', 3, 'four', 5,7,8,'ppp'];

     type alpha = (number | string)[]



     const addNumbers = (mixedData: alpha): number => {
          let total: number = 0;

          mixedData.map((num) => {
               if (typeof num === 'number') {
                    total = total + num;
               }

               else {

                    total = total;
               }
          });

          return total;
     }


     console.log(addNumbers(mixedData))




}