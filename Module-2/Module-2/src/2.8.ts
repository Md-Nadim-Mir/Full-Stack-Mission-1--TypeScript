{

    // Asynchronous typescript

   type Todo={
        userId:number,
        id:number,
        title:string,
        completed:boolean
    }

    const toDo= async():Promise<Todo>=>{

       const res=await fetch('https://jsonplaceholder.typicode.com/todos/1');
       const data=await res.json();
       console.log(data)
    }

   toDo();

    type Something = {something : string};

    // simulate
    const createPromise = ():Promise<Something>=>{

        return new Promise<Something>((resolve, reject) => {

            const data : Something = {something : 'something'};

            if(data){
                resolve (data)
            }else{
                reject('fail to data load')
            }
            
        })
    }


    // calling create function

    const showData = async () : Promise<Something>=>{
        const data : Something = await createPromise ();
        return data;
        // console.log(data)
    }


    showData();


    // 
}