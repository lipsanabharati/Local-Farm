"use client";

import { useEffect, useState,useRef } from "react";
import axios from "axios";
import { useToast } from "@/context/ToastContext";

export default function EventAdmin() {
  const [events, setEvents] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);

  const [selected, setSelected] = useState(0);

  const { showSuccess, showFail } = useToast();

  //form data
  const [id, setId] = useState(0);
  const [eventTitle, setEventTitle] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [isUpcoming, setIsUpcoming] = useState(false);
  const [date, setDate] = useState("");
  const [photos, setPhotos] = useState([]);
  const [previewPhotos, setPreviewPhotos] = useState([]);
  const [update, setUpdate] = useState(false);

  //adding api data
  const [addEventTitle, setAddEventTitle] = useState("");
  const [addEventDescription, setAddEventDescription] = useState("");
  const [addIsUpcoming, setAddIsUpcoming] = useState(false);
  const [addDate, setAddDate] = useState("");
  const [addPhotos, setAddPhotos] = useState([]);
  const [addPreviewPhotos, setAddPreviewPhotos] = useState([]);

  //pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentEvents = events.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(events.length / itemsPerPage);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/events`)
      .then((res) => {
        setEvents(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
        setEvents([]);
      });
  }, [update]);

  const handleUpdateClick = (item) => {
    setShowForm(true);
    setSelected(item);

    //prefilling form
    setEventTitle(item.eventTitle);
    setIsUpcoming(item.isUpcoming);
    setEventDescription(item.eventDescription);
    setDate(item.date?.slice(0, 10));
    setPhotos(item.photos?.map((p) => p.imagePath) || [""]);
  };

  const handleAddClick = () => {
    setShowAddForm(true);
  };

  const handlePhotoChange = (e, index) => {
    const file = e.target.files[0];
    if (!file) return;

    const updatedPhotos = [...photos];
    updatedPhotos[index] = file;
    setPhotos(updatedPhotos);

    //preview
    const updatedPreview = [...previewPhotos];
    updatedPreview[index] = URL.createObjectURL(file); //creates a url without passing to server
    setPreviewPhotos(updatedPreview);
  };

  const handleAddPhotoChange = (e, index) => {
    const file = e.target.files[0];
    if (!file) return;

    const updatedPhotos = [...addPhotos];
    updatedPhotos[index] = file;
    setAddPhotos(updatedPhotos);

    //preview
    const updatedPreview = [...addPreviewPhotos];
    updatedPreview[index] = URL.createObjectURL(file); //creates a url without passing to server
    setAddPreviewPhotos(updatedPreview);
  };

  const addPhotoField = () => {
    setPhotos([...photos, ""]);
  };

  const addAddPhotoField = () => {
    setAddPhotos([...addPhotos, ""]);
  };


  const removePhotoField = (index) => {
    const updated = photos.filter((_, i) => i !== index);
    setPhotos(updated);
  };

  const addRemovePhotoField = (index) => {
    const updated = addPhotos.filter((_, i) => i !== index);
    setAddPhotos(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //sending files must be done through form data
    const formData = new FormData();

    formData.append("eventTitle", eventTitle);
    formData.append("eventDescription", eventDescription);
    formData.append("date", date);
    formData.append("isUpcoming", isUpcoming ? true : false);

    photos.forEach((photo) => {
      if (photo instanceof File) {
        formData.append("Photos", photo);
      }
    });

    console.log([...formData]);

    try {
      await axios.put(
        `http://localhost:5000/api/events/${selected.id}`,
        formData,
      );

      showSuccess("Updated Successfully");
      setShowForm(false);
      setUpdate((prev) => !prev);
    } catch (err) {
      console.log(err);
      showFail("Update failed!");
    }
  };


  const handleAddSubmit = async (e) => {
    e.preventDefault();

    //sending files must be done through form data
    const formData = new FormData();

    formData.append("eventTitle", addEventTitle);
    formData.append("eventDescription", addEventDescription);
    formData.append("date", addDate);
    formData.append("isUpcoming", addIsUpcoming ? true : false);

    addPhotos.forEach((photo) => {
      if (photo instanceof File) {
        formData.append("Photos", photo);
      }
    });

    console.log([...formData]);

    try {
      await axios.post(
        `http://localhost:5000/api/events`,
        formData,
      );

      showSuccess("Updated Successfully");
      setShowAddForm(false);
      setUpdate((prev) => !prev);
    } catch (err) {
      console.log(err);
      showFail("Update failed!");
    }
  };


  const quillRef=useRef(null);
  const editorRef=useRef(null);
  
     useEffect(() => {
      if (!editorRef.current || quillRef.current) return;
  
      const loadQuill = async () => {
          const Quill = (await import("quill")).default;
  
          quillRef.current = new Quill(editorRef.current, {
              theme: "snow",
          });
  
          // set initial value
          quillRef.current.root.innerHTML = eventDescription;
  
          // listen for changes
          quillRef.current.on("text-change", () => {
              setEventDescription(quillRef.current.root.innerHTML);
          });
      };
  
      if (showForm) {
                  loadQuill();
              }
      }, [showForm]);//runs when form opens
  
      useEffect(()=>{
          if(!showForm){
              quillRef.current=null;
          }
      },[showForm]);


      //adding form quill
      const quillAddRef=useRef(null);
  const editorAddRef=useRef(null);
  
     useEffect(() => {
      if (!editorAddRef.current || quillAddRef.current) return;
  
      const loadQuill = async () => {
          const Quill = (await import("quill")).default;
  
          quillAddRef.current = new Quill(editorAddRef.current, {
              theme: "snow",
          });
  
          // set initial value
          quillAddRef.current.root.innerHTML = addEventDescription;
  
          // listen for changes
          quillAddRef.current.on("text-change", () => {
              setAddEventDescription(quillAddRef.current.root.innerHTML);
          });
      };
  
      if (showAddForm) {
                  loadQuill();
              }
      }, [showAddForm]);//runs when form opens
  
      useEffect(()=>{
          if(!showAddForm){
              quillAddRef.current=null;
          }
      },[showAddForm]);

  return (
    <section className="mt-20 mb-10 p-10">
      <table className="border-1 border-gray-300">
        <thead>
          <tr className="border-1 border-gray-300">
            <th className="border-1 p-1 text-center">Id</th>
            <th className="border-1 p-1 text-center">Event Title</th>
            <th className="border-1 p-1 text-center">Event Description</th>
            <th className="border-1 p-1 text-center">Is Upcoming</th>
            <th className="border-1 p-1 text-center">Date</th>
            <th className="border-1 p-1 text-center">Created At</th>
            <th className="border-1 p-1 text-center">Updated At</th>
            <th className="border-1 p-1 text-center">Photos</th>
            <th className="border-1 p-1 text-center">Update</th>
          </tr>
        </thead>
        <tbody>
          {currentEvents.map((event, index) => {
            return (
              <tr key={index} className="border-1 border-gray-300">
                <td className="border-1 p-1 text-center">{event.id}</td>
                <td className="border-1 p-1 text-center">{event.eventTitle}</td>
                <td
                className="line-clamp-3 max-w-[250px]"
                dangerouslySetInnerHTML={{ __html: event.eventDescription }}
                />
                <td className="border-1 p-1 text-center">
                  {event.isUpcoming ? "Yes" : "No"}
                </td>
                <td className="border-1 p-1 text-center">{event.date}</td>
                <td className="border-1 p-1 text-center">
                  {event.createdAt.slice(0, 10)}
                </td>
                <td className="border-1 p-1 text-center">
                  {event.updatedAt.slice(0, 10)}
                </td>
                <td className="border-1 p-1 text-center">
                  <img
                    key={index}
                    src={`http://localhost:5000/${event.photos[0].imagePath}`}
                    className="w-16 h-16 object-cover"
                  ></img>
                </td>
                <td className="border-1 p-1 text-center">
                  <button
                    className="bg-[#609647] p-2 hover:bg-[#93C553] hover:cursor-pointer m-3 "
                    onClick={() => handleUpdateClick(event)}
                  >
                    Update
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="flex gap-10">
                <div className="flex gap-2 mt-4">
            {[...Array(totalPages)].map((_, index) => (
                <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-3 py-1 border rounded hover:cursor-pointer ${
                    currentPage === index + 1
                    ? "bg-[#609647] text-white"
                    : "bg-white"
                }`}
                >
                {index + 1}
                </button>
            ))}
            </div>

            <div>
                <button className="mt-4  bg-[#609647] text-white py-2 px-2 rounded-2xl font-bold hover:bg-[#93C553] hover:cursor-pointer transition-all shadow-lg shadow-indigo-200 active:scale-[0.98]" onClick={handleAddClick}>Add Event</button>
            </div>                 
            </div>

      {showForm && (
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
                <label className="text-sm font-bold text-gray-700 ml-1">
                  Event Title
                </label>
                <input
                  type="text"
                  id="event-title"
                  className="p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#93C553]
                                 focus:bg-white outline-none transition-all text-gray-800"
                  value={eventTitle}
                  onChange={(e) => setEventTitle(e.target.value)}
                  required
                />
              </div>

              
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-bold text-gray-700 ml-1">
                                Event Description
                            </label>

                            <div
                                ref={editorRef}
                                className="bg-white rounded-xl h-[150px]"
                            />
                        </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-bold text-gray-700 ml-1">
                  Is Upcoming
                </label>
                <input
                  type="checkbox"
                  id="is-upcoming"
                  className="p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#93C553] focus:bg-white outline-none transition-all text-gray-800"
                  checked={isUpcoming}
                  onChange={(e) => setIsUpcoming(e.target.checked)}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-bold text-gray-700 ml-1">
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  className="p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#93C553] focus:bg-white outline-none transition-all text-gray-800"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-700 ml-1">
                  Photos
                </label>

                {photos.map((_, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handlePhotoChange(e, index)}
                      className="p-4 bg-gray-50 border border-gray-200 rounded-2xl w-full"
                    />

                    {previewPhotos[index] && (
                      <img
                        src={previewPhotos[index]}
                        className="w-16 h-16 rounded object-cover"
                      />
                    )}

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
                type="submit"
                className="mt-4  bg-[#609647] text-white py-4 rounded-2xl font-bold hover:bg-[#93C553] hover:cursor-pointer transition-all shadow-lg shadow-indigo-200 active:scale-[0.98]"
              >
                Update
              </button>
            </form>
          </div>
        </div>
      )}


      {showAddForm && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-2xl w-[500px] max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setShowAddForm(false)}
              className="float-right text-red-500 font-bold"
            >
              X
            </button>

            <form onSubmit={handleAddSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-bold text-gray-700 ml-1">
                  Event Title
                </label>
                <input
                  type="text"
                  id="event-title"
                  className="p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#93C553]
                                 focus:bg-white outline-none transition-all text-gray-800"
                  value={addEventTitle}
                  onChange={(e) => setAddEventTitle(e.target.value)}
                  required
                />
              </div>

              
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-bold text-gray-700 ml-1">
                                Event Description
                            </label>

                            <div
                                ref={editorAddRef}
                                className="bg-white rounded-xl h-[150px]"
                            />
                        </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-bold text-gray-700 ml-1">
                  Is Upcoming
                </label>
                <input
                  type="checkbox"
                  id="is-upcoming"
                  className="p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#93C553] focus:bg-white outline-none transition-all text-gray-800"
                  checked={addIsUpcoming}
                  onChange={(e) => setAddIsUpcoming(e.target.checked)}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-bold text-gray-700 ml-1">
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  className="p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#93C553] focus:bg-white outline-none transition-all text-gray-800"
                  value={addDate}
                  onChange={(e) => setAddDate(e.target.value)}
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-700 ml-1">
                  Photos
                </label>

                {addPhotos?.map((_, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleAddPhotoChange(e, index)}
                      className="p-4 bg-gray-50 border border-gray-200 rounded-2xl w-full"
                    />

                    {addPreviewPhotos[index] && (
                      <img
                        src={addPreviewPhotos[index]}
                        className="w-16 h-16 rounded object-cover"
                      />
                    )}

                    <button
                      type="button"
                      onClick={() => addRemovePhotoField(index)}
                      className="bg-red-400 px-3 rounded-xl"
                    >
                      X
                    </button>
                  </div>
                ))}

                <button
                  type="button"
                  onClick={addAddPhotoField}
                  className="bg-gray-300 p-2 rounded-xl"
                >
                  + Add Photo
                </button>
              </div>

              <button
                type="submit"
                className="mt-4  bg-[#609647] text-white py-4 rounded-2xl font-bold hover:bg-[#93C553] hover:cursor-pointer transition-all shadow-lg shadow-indigo-200 active:scale-[0.98]"
              >
                Add
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
