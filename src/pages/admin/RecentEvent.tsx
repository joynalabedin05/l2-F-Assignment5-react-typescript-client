import { Link } from "react-router-dom";
import { useQuery } from "react-query";


const RecentEvent = () => {

    const { data: recentEvents = [], isLoading } = useQuery({
        queryKey:  ['recentEvents'], 
         queryFn: async()=>{
          return await fetch('https://assignment5-frontend-server.vercel.app/recent-event')
          .then(res=>res.json())
         }
      });
  
      if(isLoading){
          return <p>Loading....</p>
      }

      const handleDelete = (_id: unknown)=>{
        fetch(`https://assignment5-frontend-server.vercel.app/recent-event/${_id}`, {
            method: 'DELETE',
            headers:{
                'content-type': 'application/json'
              },
              
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.deletedCount>0){
                alert('data deleted succefully');
            }
        })
      }

      type Item = {
        _id: string,
        name: string,
        image: string
       }
    return (
        <div>
            <h1 className="text-3xl text-center mb-6">Recent Event Management:</h1>
            <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                <tr>                 
                    <th>Serial</th>
                    <th>Recent Event Name</th>
                    <th>Recent Event-Image</th>                  
                    <th>Create Recent Event</th>
                    <th>Update Recent Event</th>
                    <th>Delete Recent Evevt</th>
                </tr>
                </thead>
                <tbody>
                {/* row 1 */}
                {
                    recentEvents.map((item: Item, i: number)=>                  
                    <tr key={item._id}>                 
                    
                    <td>
                    {i + 1}
                    </td>
                    <td>
                    {item.name}
                    </td>
                    <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                        </div>
                        </div>                       
                    </div>
                    </td>
                    <td>
                    <Link to='/admin/create-recent-event' className="btn btn-ghost btn-xs">Create Recent Event</Link>
                    </td>
                    <td>
                    <Link to={`/admin/update-recent-event/${item._id}`} className="btn btn-ghost btn-xs">Update Recent Event</Link>
                    </td>
                    <td>
                    <button onClick={()=>handleDelete(item._id)} className="btn btn-ghost btn-xs">Delete Recent Event</button>
                    </td>
                </tr>     
                   )
                }        
                </tbody>             
            </table>
            </div>
        </div>
    );
};

export default RecentEvent;