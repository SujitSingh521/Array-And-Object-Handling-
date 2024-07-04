import React from "react"

function  ArrayWithList(){

    const students =["Sujit","Singh","Anshika","Kumari"];
       // Map looping 

    //    students.map((item)=>{
    //      console.warn("My Name is : ",item);
    //    });

    //    for(let i=0;i<students.length;i++)
    //     {
    //         console.log("in for loop My name is :",students[i]);
    //     }



   return(
    <div>
        <h2 style={{textAlign:"center"}}>Handle Array With List</h2>

        {
            students.map((data)=>
            
                <h3 style={{textAlign:'center'}}>Name is : {data}</h3>
            )


        }
    </div>

   );
}

export default  ArrayWithList;