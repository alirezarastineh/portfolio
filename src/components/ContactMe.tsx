"use client";

import React from "react";
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer, ToastPosition } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PERSONAL_INFO } from "../constants";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactMe = React.memo(function ContactMe() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      toast.error(
        "Email service configuration is missing. Please contact the administrator.",
        {
          position: "bottom-center" as ToastPosition,
          style: {
            background: "rgba(247, 171, 10, 0.4)",
            color: "white",
          },
        }
      );
      return;
    }

    const templateParams = {
      to_name: PERSONAL_INFO.NAME.split(" ")[0],
      from_name: formData.name,
      reply_to: formData.email,
      subject: formData.subject,
      message: `Subject: ${formData.subject}\n\n${formData.message}`,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey).then(
      (_response) => {
        toast.success("Message sent successfully!", {
          position: "bottom-center" as ToastPosition,
          style: {
            background: "rgba(211, 191, 148, 0.3)",
            color: "white",
          },
        });
      },
      (_err) => {
        toast.error("Failed to send the message. Please try again later.", {
          position: "bottom-center" as ToastPosition,
          style: {
            background: "rgba(247, 171, 10, 0.4)",
            color: "white",
          },
        });
      }
    );
  };

  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-2 sm:px-10 justify-center mx-auto items-center z-0 overflow-hidden">
      <ToastContainer />
      <h3 className="absolute top-16 sm:top-16 md:top-16 lg:top-12 xl:top-12 2xl:top-20 uppercase tracking-[8px] sm:tracking-[12px] md:tracking-[16px] lg:tracking-[20px] text-gray-500 text-lg sm:text-xl md:text-2xl z-10 text-center w-full px-4">
        Kontakt
      </h3>
      <div className="flex flex-col space-y-3 sm:space-y-5 relative top-5">
        <h4 className="text-lg sm:text-4xl font-semibold text-center">
          Habe ich genau das, was Sie brauchen?{" "}
          <span className="decoration-[#F7AB0A]/50 underline">
            Let&apos;s Talk!
          </span>
        </h4>
        <div className="space-y-2 sm:space-y-5">
          <div className="flex items-center sm:space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="sm:text-2xl">{PERSONAL_INFO.PHONE}</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <a
              href={`mailto:${PERSONAL_INFO.EMAIL}`}
              className="sm:text-2xl hover:rounded-full hover:text-[#F7AB0A]/60 transition-all duration-300 ease-out"
            >
              {PERSONAL_INFO.EMAIL}
            </a>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="sm:text-2xl">{PERSONAL_INFO.LOCATION}</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-4 w-full max-w-md mx-auto transition-all ease-in-out duration-300"
        >
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-2">
            <div className="flex-1">
              <label htmlFor="name" className="sr-only">
                Your name
              </label>
              <input
                id="name"
                {...register("name", { required: "Name is required" })}
                placeholder="Name"
                className={`contact-input w-full ${
                  errors.name && "border-red-500"
                }`}
                type="text"
                aria-invalid={errors.name ? "true" : "false"}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1 block" role="alert">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div className="flex-1">
              <label htmlFor="email" className="sr-only">
                Your email address
              </label>
              <input
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Please enter a valid email address",
                  },
                })}
                placeholder="Email"
                className={`contact-input w-full ${
                  errors.email && "border-red-500"
                }`}
                type="email"
                aria-invalid={errors.email ? "true" : "false"}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1 block" role="alert">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>
          <div>
            <label htmlFor="subject" className="sr-only">
              Email subject
            </label>
            <input
              id="subject"
              {...register("subject", { required: "Subject is required" })}
              placeholder="Betreff"
              className={`contact-input w-full ${
                errors.subject && "border-red-500"
              }`}
              type="text"
              aria-invalid={errors.subject ? "true" : "false"}
            />
            {errors.subject && (
              <p className="text-red-500 text-xs mt-1 block" role="alert">
                {errors.subject.message}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="message" className="sr-only">
              Your message
            </label>
            <textarea
              id="message"
              {...register("message", { required: "Message is required" })}
              placeholder="Nachricht"
              className={`contact-input custom-scrollbar w-full ${
                errors.message && "border-red-500"
              }`}
              style={{ resize: "none", height: "110px" }}
              aria-invalid={errors.message ? "true" : "false"}
            />
            {errors.message && (
              <p className="text-red-500 text-xs mt-1 block" role="alert">
                {errors.message.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="bg-[#F7AB0A]/40 hover:bg-[#F7AB0A] transition-all sm:py-5 py-2 sm:px-10 px-5 rounded-md text-gray-800 font-semibold sm:text-lg w-full"
          >
            Absenden
          </button>
        </form>
      </div>
    </div>
  );
});

export default ContactMe;
