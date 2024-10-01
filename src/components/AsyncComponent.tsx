//a async server component that can be used to do some async operation before rendering the component (Like querying data from a database)
export async function AsyncComponent(){
    const getAllData=()=>{
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve("Data Fetched")
            },2000)
        })
    }
    const data=await getAllData();
    console.log('Fetched Data :'+data)
    return (
        <div>
            <h1>Async Component</h1>
        </div>
    )
}