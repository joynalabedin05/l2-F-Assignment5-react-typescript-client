
import { Link } from "react-router-dom";
import { useQuery } from "react-query";

/* eslint-disable @typescript-eslint/no-unused-vars */
const Event = () => {

    const { data: events = [], isLoading } = useQuery({
        queryKey:  ['events'], 
         queryFn: async()=>{
          return await fetch('https://assignment5-frontend-server.vercel.app/events')
          .then(res=>res.json())
         }
      });
  
      if(isLoading){
          return <p>Loading....</p>
      }

      const handleDelete = (_id: unknown)=>{
        fetch(`https://assignment5-frontend-server.vercel.app/events/${_id}`, {
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
            <h1 className="text-3xl text-center mb-6">Event Items Management:</h1>
            <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                <tr>                 
                    <th>Serial</th>
                    <th>Event Name</th>
                    <th>Event Image</th>
                    <th>Create Event</th>
                    <th>Update Event</th>
                    <th>Delete Evevt</th>
                </tr>
                </thead>
                <tbody>
                {/* row 1 */}
                {
                    
                    events.map((item: Item, i: number)=>                  
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
                    <Link to='/admin/create-event' className="btn btn-ghost btn-xs">Create Event</Link>
                    </td>
                    <td>
                    <Link to={`/admin/update-event/${item._id}`} className="btn btn-ghost btn-xs">Update Event</Link>
                    </td>
                    <td>
                    <button onClick={()=>handleDelete(item._id)} className="btn btn-ghost btn-xs">Delete Event</button>
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

export default Event;