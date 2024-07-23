"use client";
import axios from "axios";
import React, { FormEvent, useState } from "react";

interface FormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  contact: HTMLInputElement;
  description: HTMLTextAreaElement;
}

interface ContactForm extends HTMLFormElement {
  elements: FormElements;
}

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const handleSubmit = async (event: FormEvent<ContactForm>) => {
    event.preventDefault();
    const { name, contact, description } = event.currentTarget.elements;

    if (!name.value || !contact.value || !description.value) {
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await axios.post("https://formspree.io/f/xovavjjw", {
        name: name.value,
        phone: contact.value,
        description: description.value,
      });
      console.log("Formulario enviado", response.data);
      name.value = "";
      contact.value = "";
      description.value = "";
      setToastMessage("Se ha enviado correctamente");
    } catch (error) {
      console.error("Error al enviar formulario", error);
      setToastMessage("Algo ha salido mal");
    } finally {
      setIsSubmitting(false);
      setToastVisible(true);
      setTimeout(() => setToastVisible(false), 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-full small:w-[400px]">
      <div className="flex items-center justify-center h-28 bg-base-100 w-full">
        <h2 className="text-xl font-semibold text-center tracking-wider">
          Rellena el <br />
          <span className="font-bold uppercase">formulario</span>
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Tu nombre o nick"
          className="input w-full text-base rounded-none"
        />
        <input
          type="text"
          id="contact"
          name="contact"
          required
          placeholder="Usuario de telegram"
          className="input w-full text-base rounded-none"
        />
        <textarea
          id="description"
          name="description"
          required
          className="textarea w-full text-base rounded-none"
          placeholder="Listado de dudas y necesidades..."
        ></textarea>
        <button
          disabled={isSubmitting}
          className="btn btn-primary font-bold text-lg rounded-none"
        >
          {isSubmitting ? (
            <span className="loading loading-spinner loading-sm" />
          ) : (
            "Enviar"
          )}
        </button>
      </div>

      {toastVisible && (
        <div className="toast toast-end z-50">
          <div className="alert bg-primary text-base-300">
            <span className="font-semibold">{toastMessage}</span>
          </div>
        </div>
      )}
    </form>
  );
};
