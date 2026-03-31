"use client";

import {useEffect,useState} from "react";
import axios from "axios"
import { useToast } from "@/context/ToastContext";

export default function EventAdmin()
{
    const [events,setEvents]=useState([]);
    const [showForm,setShowForm]=useState(false);
    const [selected,setSelected]=useState(0);

    const {showSuccess,showFail}=useToast();

    //form data
    const [id,setId]=useState(0);
    const [eventTitle,setEventTitle]=useState("");
    const [eventDescription,setEventDescription]=useState("");
    const [isupcoming,setIsupcoming]=useState(false);
    const [date,setDate]=useState("");
    const [photos,setPhotos]=useState([""]);
    const [update,setUpdate]=useState(false);

    useEffect(()=>{
        axios.get(`http://localhost:5000/api/events`)
        .then((res)=>{
            setEvents(res.data);
            console.log(res.data);
        })
        .catch((err)=>{
            console.error(err);
            setEvents([]);
        })
    },[update])

    const handleUpdateClick=(item)=>{
        setShowForm(true);
        setSelected(item);

        //prefilling form
        setId(item.id);
        setEventTitle(item.eventTitle);
        setIsupcoming(item.isupcoming);
        setEventDescription(item.eventDescription);
        setDate(item.date.slice(0, 10));

        setPhotos(item.photos?.map(p=>p.imagePath)|| [""]);

    }

    const handlePhotoChange= (index,value)=>{
        const updated=[...photos];
        updated[index]=value;
        setPhotos(updated);
    }

    const addPhotoField=()=>{
        setPhotos([...photos,""]);
    }

    const removePhotoField=(index)=>{
        const updated=photos.filter((_,i)=>i !== index);
        setPhotos(updated);
    }

    const handleSubmit= async (e)=>{
        e.preventDefault();

        const cleanedPhotos=photos.filter(p=>p.trim() !== "");

        const data={
            id,
            eventTitle,
            eventDescription,
            isupcoming,
            date,
            photos:cleanedPhotos
        }

        try{
            await axios.put(`http://localhost:5000/api/events/${selected.id}`,data);
            showSuccess("Updated Successfully");
            console.log("Updated:",data);
            setShowForm(false);
            setUpdate(prev=>!prev);
        }
        catch(err)
        {
            console.log(err);
            showFail("Update failed");
        }
    };

    

    return(
        <section className="mt-20 mb-10 p-10">
            <table className="border-1 border-gray-300">
             <thead>
                <tr className="border-1 border-gray-300">
                    <th>Id</th>
                    <th>Event Title</th>
                    <th>Event Description</th>
                    <th className="p-2">Is Upcoming</th>
                    <th className="p-2">Date</th>
                    <th>Created At</th>
                    <th>Updated At</th>
                    <th>Photos</th>
                    <th>Update</th>
                </tr>
              </thead>
              <tbody>
                {
                    events.map((event,index)=> {
                        return (
                        <tr key={index} className="border-1 border-gray-300">
                            <td>{event.id}</td>
                            <td className="ps-8">{event.eventTitle}</td>
                            <td>{event.eventDescription}</td>
                            <td className="ps-8">{(event.isupcoming?"Yes":"No")}</td>
                            <td>{event.date}</td>
                            <td>{event.createdAt}</td>
                            <td>{event.updatedAt}</td>
                            <td>{event.photos?.map((image,index)=>(
                                <p
                                key={index}>{image.imagePath}</p>
                            ))}</td>
                            <td><button 
                            className="bg-[#609647] p-2 hover:bg-[#93C553] hover:cursor-pointer m-3 "
                            onClick={()=>handleUpdateClick(event)}>Update</button></td>
                        </tr>

                    )})
                }
                </tbody>
            </table>

            {
                showForm && (

                    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
    
                            <div className="bg-white p-8 rounded-2xl w-[500px] max-h-[90vh] overflow-y-auto shadow-2xl">
                            
                            {/* Close Button */}
                            <button
                                onClick={() => setShowForm(false)}
                                className="float-right text-red-500 font-bold"
                            >
                                X
                            </button>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                        <div className="flex flex-col gap-1.5">
                            <label  className="text-sm font-bold text-gray-700 ml-1">Event Title</label>
                            <input 
                                type="text" 
                                id='event-title' 
                                className="p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#93C553]
                                 focus:bg-white outline-none transition-all text-gray-800"
                                value={eventTitle} 
                                onChange={(e) => setEventTitle(e.target.value)} 
                                required 
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-bold text-gray-700 ml-1">Event Description</label>
                            <input 
                                type="text" 
                                id='event-description' 
                                className="p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#93C553] focus:bg-white outline-none transition-all text-gray-800"
                                value={eventDescription} 
                                onChange={(e) => setEventDescription(e.target.value)} 
                                required 
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-bold text-gray-700 ml-1">Is Upcoming</label>
                            <input 
                                type="checkbox" 
                                id='is-upcoming' 
                                className="p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#93C553] focus:bg-white outline-none transition-all text-gray-800"
                                checked={isupcoming} 
                                onChange={(e) => setIsupcoming(e.target.checked)} 
                                
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-bold text-gray-700 ml-1">Date</label>
                            <input 
                                type="date" 
                                id='date' 
                                className="p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#93C553] focus:bg-white outline-none transition-all text-gray-800"
                                value={date} 
                                onChange={(e) => setDate(e.target.value)} 
                                required 
                            />
                        </div>


                        <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-gray-700 ml-1">Photos</label>

                        {photos.map((photo, index) => (
                            <div key={index} className="flex gap-2">
                            <input
                                type="text"
                                value={photo}
                                onChange={(e) => handlePhotoChange(index, e.target.value)}
                                placeholder={`Photo ${index + 1}`}
                                className="p-4 bg-gray-50 border border-gray-200 rounded-2xl w-full"
                            />

                            <button
                                type="button"
                                onClick={() => removePhotoField(index)}
                                className="bg-red-400 px-3 rounded-xl"
                            >
                                X
                            </button>
                            </div>
                        ))}

                        <button
                            type="button"
                            onClick={addPhotoField}
                            className="bg-gray-300 p-2 rounded-xl"
                        >
                            + Add Photo
                        </button>
                        </div>


                        <button 
                            type='submit' 
                            className="mt-4  bg-[#609647] text-white py-4 rounded-2xl font-bold hover:bg-[#93C553] hover:cursor-pointer transition-all shadow-lg shadow-indigo-200 active:scale-[0.98]"
                        >
                            Update
                        </button>
                    </form>

                    </div>
                </div>
                )
            }
        </section>
    )
}