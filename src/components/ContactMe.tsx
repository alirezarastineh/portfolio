"use client";

import React from "react";
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactMe({}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    const templateParams = {
      to_name: "Alireza",
      from_name: formData.name,
      reply_to: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs
      .send(
        "service_js159fj",
        "template_1ov31ue",
        templateParams,
        "RfuKQfmmuzTrBPsAv"
      )
      .then(
        (_response) => {
          toast.success("Message sent successfully!", {
            position: toast.POSITION.BOTTOM_CENTER,
            style: {
              background: "rgba(211, 191, 148, 0.3)",
              color: "white",
            },
          });
        },
        (_err) => {
          toast.error("Failed to send the message. Please try again later.", {
            position: toast.POSITION.BOTTOM_CENTER,
            style: {
              background: "rgba(247, 171, 10, 0.4)",
              color: "white",
            },
          });
        }
      );
  };
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-center mx-auto items-center z-0 overflow-hidden">
      <ToastContainer />
      <h3 className="absolute top-16 sm:top-16 md:top-16 lg:top-12 xl:top-12 2xl:top-20 uppercase tracking-[20px] text-gray-500 text-2xl z-10">
        Kontakt
      </h3>
      <div className="flex flex-col space-y-5">
        <h4 className="text-lg sm:text-4xl font-semibold text-center">
          Habe ich genau das, was Sie brauchen?{" "}
          <span className="decoration-[#F7AB0A]/50 underline">Lets Talk!</span>
        </h4>
        <div className="space-y-2 sm:space-y-5">
          <div className="flex items-center sm:space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="sm:text-2xl">+49 176 5888 04 85</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="sm:text-2xl">alirezarastineh95@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="sm:text-2xl">Berlin, Deutschland</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
            <div>
              <input
                {...register("name", { required: true })}
                placeholder="Name"
                className={`contactInput ${errors.name && "border-red-500"}`}
                type="text"
              />
            </div>
            <div>
              <input
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
                placeholder="Email"
                className={`contactInput ${errors.email && "border-red-500"}`}
                type="email"
              />
            </div>
          </div>
          <input
            {...register("subject", { required: true })}
            placeholder="Betreff"
            className={`contactInput ${errors.subject && "border-red-500"}`}
            type="text"
          />
          <textarea
            {...register("message", { required: true })}
            placeholder="Nachricht"
            className={`contactInput ${errors.message && "border-red-500"}`}
          />
          <button
            type="submit"
            className="bg-[#F7AB0A]/40 hover:bg-[#F7AB0A] transition-all sm:py-5 py-2 sm:px-10 px-5 rounded-md text-gray-800 font-semibold sm:text-lg"
          >
            Absenden
          </button>
        </form>
      </div>
    </div>
  );
}
