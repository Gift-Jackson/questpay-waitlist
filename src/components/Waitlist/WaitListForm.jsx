import { motion } from "framer-motion";
import styles from "./waitlist.module.css";
import { useState } from "react";
import { toast } from "sonner";
const WaitListForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name) {
        toast.error("Please enter your name!", {
            style: {
                background: " crimson",
                border: "none"
           }
       });
    } else if (!formData.email) {
        toast.error("Please enter your e-mail!", {
            style: {
                background: " crimson",
                border: "none"
           }
       });
    } else {
        console.log(formData);
        toast.success("Success, but its just a demo!", {
            style: {
                background: " mediumseagreen",
                border: "none"
           }
       });
    }
  };
  return (
    <div className="main-container">
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.title}>
            <h2>Join The Waitlist</h2>
            <p>Complete the form to join the family</p>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.grp}>
              <label htmlFor="name">Full Name:</label>
              <div className={styles.inp}>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="e.g Gift Jackson"
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
                  value={formData.email}
                  onChange={handleChange}
                />
                <i className="fa-regular fa-envelope"></i>
              </div>
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
              Submit
            </motion.button>
          </form>
        </div>
        <p className={styles.info}>
          Join our waitlist today and be the first to access the future of
          financial convenience with <span className="mark">QuestPay</span>.
        </p>
      </div>
    </div>
  );
};

export default WaitListForm;
