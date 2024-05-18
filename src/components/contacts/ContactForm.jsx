import styles from "./contact.module.css";
import Title from "../title/Title";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";
import axios from "axios";

const ContactForm = () => {
  const [loading, setLoading] = useState();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    query: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name) {
      toast.error("Please enter your name!", {
        style: {
          background: " crimson",
          border: "none",
        },
      });
    } else if (!formData.email) {
      toast.error("Please enter your e-mail!", {
        style: {
          background: " crimson",
          border: "none",
        },
      });
    } else if (!formData.query) {
      toast.error("Please enter your Query!", {
        style: {
          background: " crimson",
          border: "none",
        },
      });
    } else {
      setLoading(true);
      console.log(formData);
      axios
        .post("https://submit-form.com/gXf7Gg3Kf", {
          name: formData.name,
          email: formData.email,
        })
        .then(function (response) {
          console.log(response);
          toast.success("Form Submitted successfully!", {
            style: {
              background: " mediumseagreen",
              border: "none",
            },
          });
        })
        .catch(function (error) {
          console.log(error);
          toast.error(error.message, {
            style: {
              background: " crimson",
              border: "none",
            },
          });
        })
        .finally(() => setLoading(false));

      setFormData({
        name: "",
        email: "",
        query: "",
      });
    }
  };

  return (
    <div className="main-container">
      <div className={styles.container}>
        <div className={styles.content}>
          <Title
            title="Get in Touch with Us"
            subtitle="Submit any query here. We're Here to Assist You"
          />

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.grp}>
              <label htmlFor="name">Full Name:</label>
              <div className={styles.inp}>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="e.g Gift Jackson"
                  autoComplete="off"
                  value={formData.name}
                  onChange={handleChange}
                />
                <i className="fa-regular fa-user"></i>
              </div>
            </div>
            <div className={styles.grp}>
              <label htmlFor="email">E-mail Address:</label>
              <div className={styles.inp}>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="e.g hello@world.com"
                  autoComplete="off"
                  value={formData.email}
                  onChange={handleChange}
                />
                <i className="fa-regular fa-envelope"></i>
              </div>
            </div>
            <div className={styles.grp}>
              <label htmlFor="query">Query:</label>
              <textarea
                rows={5}
                name="query"
                id="query"
                placeholder="Your message..."
                value={formData.query}
                onChange={handleChange}
              ></textarea>
            </div>
            <motion.button
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{
                scale: 0.8,
              }}
              transition={{
                duration: 0.1,
              }}
              type="submit"
              className={styles.btn}
            >
              {loading ? "Submitting..." : "Submit"}
            </motion.button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
