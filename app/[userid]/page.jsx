

export default function UserDetail({params}) {
    // console.log(params);
    const {userid}=params;
    return (
        <h1>Aalu lelo with id {userid}</h1>
    )
}

// export async function generateStaticParams(){
//     //fetch all data through api
//     const data = await fetch('https://jsonplaceholder.typicode.com/users');
//     const res=await data.json();

//     console.log(res);
//     return res.map(uitem=>({
//         userid:toString(uitem.id)
//         // file name is userid
//     })
//     )
// }