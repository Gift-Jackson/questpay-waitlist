import { motion } from "framer-motion";
import styles from "./waitlist.module.css";
import { useState } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { databases, DATABASE_ID, COLLECTION_ID } from "../../appwriteConfig";
import { ID } from "appwrite";

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
      navigate("/success");
      toast.success("Success, you're on the waitlist!", {
        style: {
          background: " mediumseagreen",
          border: "none",
        },
      });
    }

    //   axios
    //     .post("https://submit-form.com/gXf7Gg3Kf", {
    //       name: formData.name,
    //       email: formData.email
    //     })
    //     .then(function (response) {
    //       console.log(response);
    //       toast.success("Success, you're on the waitlist!", {
    //         style: {
    //           background: " mediumseagreen",
    //           border: "none",
    //         },
    //       });
    //       navigate("/success")
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //       toast.error(error.message, {
    //         style: {
    //           background: " crimson",
    //           border: "none",
    //         },
    //       });
    //     })
    //   .finally(()=> setLoading(false))

    //   setFormData({
    //     name: "",
    //     email:""
    //   })
    // }
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
