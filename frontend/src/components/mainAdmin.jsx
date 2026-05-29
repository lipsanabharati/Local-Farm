"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useToast } from "@/context/ToastContext";
import { useAuth } from "@/context/AuthContext";
import { Router } from "next/router";

export default function MainAdmin() {
  const { showSuccess, showFail } = useToast();
  // const [showForm,setShowForm]=useState(true);
  // change password
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const { token } = useAuth();

  //console.log("token",token);

  // const handlePasswordChangeClick=()=>{
  //         setShowForm(true);
  //     }

  const handleChangePasswordSubmit = async (e) => {
    e.preventDefault();

    if (submitting) return;

    setSubmitting(true);

    try {
      const response = await axios.put(
        "api.localfarmnepal.com/api/admin/change-password",

        {
          currentPassword,
          newPassword,
          confirmPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      showSuccess("Password Changed Successfull!");
      //console.log("success hit");
    } catch (error) {
      if (error.response) {
        showFail(error.response.data.message);
      }
      //console.log("error hit");
    } finally {
      setSubmitting(false);
      // setShowForm(false);
    }
  };

  // const handleLogout=()=>{
  //     setToken(null);
  //     localStorage.clear();
  //     router.push("/login");
  // }

  return (
    <section className="p-40">
      <form
        onSubmit={handleChangePasswordSubmit}
        className="flex flex-col gap-5"
      >
        <div className="flex flex-col gap-1.5">
          <label
            className="text-sm font-bold text-gray-700 ml-1"
            htmlFor="current-password"
          >
            Current Password
          </label>
          <input
            type="password"
            id="current-password"
            className="p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#93C553] focus:bg-white outline-none transition-all text-gray-800"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            required
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            className="text-sm font-bold text-gray-700 ml-1"
            htmlFor="password"
          >
            New Password
          </label>
          <input
            type="password"
            id="password"
            className="p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#93C553] focus:bg-white outline-none transition-all text-gray-800"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            className="text-sm font-bold text-gray-700 ml-1"
            htmlFor="confirm-password"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirm-password"
            className="p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#93C553] focus:bg-white outline-none transition-all text-gray-800"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="mt-4  bg-[#609647] text-white py-4 rounded-2xl font-bold hover:bg-[#93C553] hover:cursor-pointer transition-all shadow-lg shadow-indigo-200 active:scale-[0.98]"
          aria-label="change button"
        >
          Change Password
        </button>
      </form>
    </section>
  );
}
