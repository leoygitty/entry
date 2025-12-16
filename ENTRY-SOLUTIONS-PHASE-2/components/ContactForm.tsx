"use client";
import { useState } from "react";
export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "" });
  return (
    <form className="max-w-md mx-auto">
      <input className="block w-full mb-4 p-2 border" placeholder="Name" />
      <input className="block w-full mb-4 p-2 border" placeholder="Email" />
      <button className="bg-accent px-6 py-3 text-white">Submit</button>
    </form>
  );
}