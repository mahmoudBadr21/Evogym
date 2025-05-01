import React, { useRef, useState, useEffect} from "react";
import { useForm } from "react-hook-form";
import "./contactUs.css"
import contactUs from '../../../assets/ContactUsPageGraphic.png'
import evolveText from '../../../assets/EvolveText.png'
import { motion } from 'framer-motion'

const ContactUs = () => {

  const { register, trigger, reset, formState: { errors } } = useForm();
  const formRef = useRef<HTMLFormElement>(null);
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const [messageContent, setMessageContent] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = await trigger(undefined, { shouldFocus: true });
    if (!isValid || !formRef.current) return;

    const formData = new FormData(formRef.current);

    try {
      const response = await fetch("https://getform.io/f/bqokjgkb", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setShowMessage(true);
        setMessageContent("The message has been sent successfully ✅")
        reset();
      } else {
        setShowMessage(true);
        setMessageContent("An error occurred while transmitting ❌")
      }
    } catch {
      setShowMessage(true);
      setMessageContent("An error occurred while transmitting ❌")
    }
  };

  useEffect(() => {
    if (showMessage) {
      const timer = setTimeout(() => setShowMessage(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showMessage]);

  return (
    <section className="contact container" id="contact-us">
      {showMessage && (
        <div className="modal-overlay">
          <div className="modal-box">
            <p>{messageContent}</p>
            <button className="btn" onClick={() => setShowMessage(false)}>
              Close
            </button>
          </div>
        </div>
      )}

      <motion.div
        className="contact-text"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.02, duration: 0.8 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <h2 className="contact-title main-title">
          <span className="spcial-color">join now</span> to get in shape.
        </h2>

        <p className="contact-desc">
          Congue adipiscing risus commodo placerat. Tellus et in feugiat nisi
          sapien vel rhoncus. Placerat at in enim pellentesque. Nulle adipiscing
          leo egestas nisi elit risus sit. Nunc cursus sagittis.
        </p>
      </motion.div>

      <div className="contact-form-image flexBetween">
        <motion.form
          ref={formRef}
          method="POST"
          accept-charset="UTF-8"
          onSubmit={handleSubmit}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.02, duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <input
            type="text"
            placeholder="Name"
            {...register("name", {
              required: true,
              maxLength: 100,
            })}
          />
          {errors.name && (
            <p className="message-error">
              {errors.name.type === "required" && "This filed is required."}
              {errors.name.type === "maxLength" && "Max length is 100 char."}
            </p>
          )}

          <input
            type="text"
            placeholder="Email"
            {...register("email", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
          />
          {errors.email && (
            <p className="message-error">
              {errors.email.type === "required" && "This filed is required."}
              {errors.email.type === "pattern" && "Invaild email address."}
            </p>
          )}

          <textarea
            placeholder="Message"
            {...register("message", {
              required: true,
              maxLength: 2000,
            })}
          />
          {errors.message && (
            <p className="message-error">
              {errors.message.type === "required" && "This filed is required."}
              {errors.message.type === "maxLength" &&
                "Max length is 2000 char."}
            </p>
          )}

          <button className="btn" type="submit">
            Send
          </button>
        </motion.form>

        <motion.div
          className="cotact-image"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.02, duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <img src={contactUs} alt="ContactUs" />
        </motion.div>
      </div>

      <motion.img
        className="contact-evolveImage"
        src={evolveText}
        alt="evolveText"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.02, duration: 0.8 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      />
    </section>
  );
}

export default ContactUs
