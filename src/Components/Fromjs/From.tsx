"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./form.module.css";
import Button from "../Button/Button";

const InputField = ({
  label,
  name,
  type = "text",
  required = false,
  value,
  onChange,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const isValid = value.trim() !== "";

  return (
    <div className={styles.nebulaInput}>
      {type === "textarea" ? (
        <textarea
          required={required}
          name={name}
          autoComplete="off"
          className={styles.input}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          rows={4}
        />
      ) : (
        <input
          required={required}
          type={type}
          name={name}
          autoComplete="off"
          className={styles.input}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      )}
      <label
        className={
          isFocused || isValid
            ? `${styles.userLabel} ${styles.inputFocusLabel}`
            : styles.userLabel
        }
      >
        {label}
      </label>
    </div>
  );
};

export default function Form() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    user_email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.first_name.trim()) {
      toast.error("Please enter your first name.");
      return;
    }
    if (!formData.last_name.trim()) {
      toast.error("Please enter your last name.");
      return;
    }
    if (!formData.user_email.trim()) {
      toast.error("Please enter your email.");
      return;
    }
    if (!isValidEmail(formData.user_email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    if (!formData.message.trim()) {
      toast.error("Please enter your message.");
      return;
    }

    setSending(true);

    emailjs
      .send(
        "service_6pz35bt",
        "template_4gf853z",
        formData,
        "K9B6agHYbQ8_FVJn8"
      )
      .then(() => {
        toast.success("Message sent successfully!");
        setFormData({
          first_name: "",
          last_name: "",
          user_email: "",
          message: "",
        });
      })
      .catch(() => {
        toast.error("Failed to send message. Please try again.");
      })
      .finally(() => {
        setSending(false);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <InputField
          label="First Name"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
          required
        />
        <InputField
          label="Last Name"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
          required
        />
        <InputField
          label="Email"
          name="user_email"
          type="email"
          value={formData.user_email}
          onChange={handleChange}
          required
        />
        <InputField
          label="Message"
          name="message"
          type="textarea"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <div className="w-full flex justify-center items-center pb-10">
          <Button text={sending ? "Sending..." : "Send"}  />
        </div>
      </form>

      <ToastContainer position="top-right" autoClose={5000} />
    </>
  );
}
