import { useForm, FieldValues } from "react-hook-form";
const img_hosting_token = import.meta.env.VITE_IMAGE;
const CreateEvent = () => {
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
  
    const { register, handleSubmit } = useForm();
   
    const onSubmit = (data: FieldValues )=> {
        console.log(data)
        const formData = new FormData();
        formData.append('image', data.image[0]);
        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                // console.log(imgResponse);
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    // console.log(data,imgURL);
                    const { name } = data;
                    const newItem = { name, image: imgURL };
                    console.log(newItem);
                    fetch('https://assignment5-frontend-server.vercel.app/create-event',{
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(newItem),
                    })
                    .then(res=>res.json())
                    .then(data=>{
                        console.log(data);
                        if(data.insertedId){
                            alert('data added successfully')
                        }
                    })
                }
            })
    };
    return (
        <div className="w-1/2 mx-auto">
            <h1 className="text-3xl font-semibold text-center">Add an Event</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex mt-5">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Event name*</span>
                        </label>
                        <input type="text" placeholder="event name" {...register("name", { required: true, maxLength: 80 })} className="input input-bordered w-full " />
                    </div>                  
                </div>                                         
                <div className="form-control w-full my-4">
                    <label className="label">
                        <span className="label-text">Item Image</span>
                    </label>
                    <input type="file"  {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                </div>
                <input className="btn btn-sm" type="submit" value="Add an Event" />
            </form>
        </div>
    );
};

export default CreateEvent;