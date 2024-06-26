import { motion } from "framer-motion";
import styles from "./waitlist.module.css";
import { useState } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { databases, DATABASE_ID, COLLECTION_ID } from "../../appwriteConfig";
import { ID } from "appwrite";
import Title from "../title/Title";

const WaitListForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
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
    } else {
      console.log(formData);
      setLoading(true);

      try {
        const promise = await databases.createDocument(
          DATABASE_ID,
          COLLECTION_ID,
          ID.unique(),
          {
            body: formData.name,
            user_id: formData.email,
          }
        );
        console.log(promise);
        toast.success("Success, you're on the waitlist!", {
          style: {
            background: " mediumseagreen",
            border: "none",
          },
        });
        setTimeout(() => {
          navigate("/success");
        }, 2500);
      } catch (error) {
        setLoading(false);
        toast.error(error, {
          style: {
            background: " crimson",
            border: "none",
          },
        });
      } finally {
        setLoading(false);
      }
    }

   
  };
  return (
    <div className="main-container">
      <div className={styles.container}>
        <div className={styles.content}>
          <Title title="Join The Waitlist" subtitle="Complete the form to join the family"/>

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
                  autoComplete="off"
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
                  autoComplete="off"
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
              {loading ? "Submitting..." : "Submit"}
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
