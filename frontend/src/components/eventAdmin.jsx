"use client";

import { useEffect, useState } from "react";
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
  const [addIsupcoming, setAddIsupcoming] = useState(false);
  const [addDate, setAddDate] = useState("");
  const [addPhotos, setAddPhotos] = useState(null);
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
    setDate(item.date.slice(0, 10));
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

  const addPhotoField = () => {
    setPhotos([...photos, ""]);
  };

  const removePhotoField = (index) => {
    const updated = photos.filter((_, i) => i !== index);
    setPhotos(updated);
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
                <td className="border-1 p-1 text-center">
                  {event.eventDescription}
                </td>
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

      <div className="flex gap-2 mt-4">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-3 py-1 border rounded hover:cursor-pointer ${
              currentPage === index + 1 ? "bg-[#609647] text-white" : "bg-white"
            }`}
          >
            {index + 1}
          </button>
        ))}
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
                <input
                  type="text"
                  id="event-description"
                  className="p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#93C553] focus:bg-white outline-none transition-all text-gray-800"
                  value={eventDescription}
                  onChange={(e) => setEventDescription(e.target.value)}
                  required
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
    </section>
  );
}
