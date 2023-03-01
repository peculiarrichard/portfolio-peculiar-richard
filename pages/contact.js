import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { headers } from "@/next.config";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // const [submitted, setSubmitted] = useState(false);

  const [errors, setErrors] = useState({});

  const [buttonText, setButtonText] = useState("send me a message");

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (name.length <= 0) {
      tempErrors["name"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }

    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");
      const res = await fetch("/api/contact", {
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
        }),
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        method: "POST",
      });
      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("send me a message");

        // Reset form fields
        setName("");
        setEmail("");
        setMessage("");
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("send me a message");
      // Reset form fields
      setName("");
      setEmail("");
      setMessage("");
    }

    // console.log("sending");
    // let data = {
    //   name:name,
    //   email:email,
    //   message:message,
    // };
    // const res = await fetch("/api/contact", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json, text/plain, */*",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // }).then((res) => {
    //   console.log("Response received");
    //   if (res.status === 200) {
    //     setSubmitted(true);
    //     setName("");
    //     setEmail("");
    //     setMessage("");
    //     return;
    //   }
    // });
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="flex mx-12 gap-2 sm:flex-col sm:gap-6 top-0 mb-10 my-4 grow min-h-screen">
        <div className="w-3/4 flex flex-col sm:w-full">
          <h2 className="font-black text-3xl p-2 mb-3">
            we can build something <br></br>
            <span className="text-5xl text-purple">great together.</span>
          </h2>
          <p className="text-lg font-bold p-2 mb-3">
            i am currently open to joining your engineering or marketing team to
            build and grow top-notch products. <br></br>if you also want to
            collaborate, or have conversations on relavant topics, please reach
            out.
          </p>
          <form
            className="flex flex-col p-3 justify-center w-3/4 text-lg"
            onSubmit={handleSubmit}>
            <label htmlFor="name">
              name <span className="text-red dark:text-gray-50">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="border-b-2 h-10 border-b-purple mb-4"
              required></input>
            {errors?.name && <p className="text-red">name cannot be empty.</p>}

            <label htmlFor="email">
              email address
              <span className="text-red"> *</span>
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="border-b-2 h-10 border-b-purple mb-4"
              required></input>
            {errors?.email && (
              <p className="text-red">email cannot be empty.</p>
            )}

            <label htmlFor="message">
              message<span className="text-red"> *</span>
            </label>
            <textarea
              name="message"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              className="h-40 sm:h-25 border-b-2 border-b-purple mb-4"
              required
              maxLength={150}></textarea>
            {errors?.message && (
              <p className="text-red">message body cannot be empty.</p>
            )}

            <button
              type="submit"
              value="Submit"
              className="w-60 h-12 text-white m-auto bg-purple rounded-3xl animate-bounce mt-2 hover:bg-slate">
              {buttonText}
            </button>

            <div className="text-left">
              {showSuccessMessage && (
                <p className="font-semibold text-sm my-2">
                  thank you! your message has been delivered, and i will reach
                  out ASAP.
                </p>
              )}
              {showFailureMessage && (
                <p className="text-red font-semibold">
                  oops! something went wrong, please try again.
                </p>
              )}
            </div>
          </form>
        </div>
        <div className=" flex flex-col gap-5 p-3 sm:w-full">
          <div className="h-10 w-12 bg-purple animate-open-skills border rounded-2xl sm:self-center mt-2 mb-2"></div>
          <div className="border-b border-b-purple pb-2">
            <p className="text-lg animate-pulse font-semibold">
              get on a quick call with me
            </p>
            <Link
              href="https://calendly.com/peculiarrichard/30min"
              className="font-black text-2xl">
              calendly
            </Link>
          </div>
          <div className="border-b border-b-purple pb-2">
            <p className="text-lg animate-pulse font-semibold">twitter</p>
            <Link
              href="https://twitter.com/peculiarichard"
              className="font-black text-2xl">
              @peculiarichard
            </Link>
          </div>
          <div className="border-b border-b-purple pb-2">
            <p className="text-lg animate-pulse font-semibold">github</p>
            <Link
              href="https://github.com/peculiarrichard"
              className="font-black text-2xl">
              peculiarrichard
            </Link>
          </div>
          <div className="border-b border-b-purple pb-2">
            <p className="text-lg animate-pulse font-semibold">email</p>
            <Link
              href="mailto:pecullozie@gmail.com"
              className="font-black text-2xl">
              pecullozie@gmail.com
            </Link>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Contact;
