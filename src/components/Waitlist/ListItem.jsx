import styles from "./list.module.css";
import Title from "../title/Title";
import { databases, DATABASE_ID, COLLECTION_ID } from "../../appwriteConfig";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { Query } from "appwrite";
import { motion } from "framer-motion";

const ListItem = () => {
  const listVar = {
    initial: {
      opacity: 0,
      y: -10
    },
    animate: {
      opacity: 1,
      y: 0,
      staggerChildren: 0.3,
      transition: {
        delay: 0.3,
        type: "spring",
        stiffness: "700",
      },
    }
  }
  const [lists, setList] = useState([]);
  useEffect(() => {
    getMessages();
  }, []);

  const getMessages = async () => {
    const promise = await databases.listDocuments(DATABASE_ID, COLLECTION_ID, [
      Query.orderDesc("$createdAt"),
    ]);
    setList(promise.documents);
  };
  return (
    <>
      <div className="main-container">
        <div className={styles.container}>
          <div className={styles.content}>
            <Title
              title="Wait List"
              subtitle="Do you see yourself and your friends here?"
            />
            <div className={styles.mem}>
              <small>Member(s): {lists.length}</small>
            </div>
            <ul className={styles.list}>
              {lists.map((list) => (
                <motion.li
                  variants={listVar}
                  initial="initial"
                  animate="animate"
                  className={styles.item} key={list.$id}>
                  <div className={styles.initial}>
                    {list.body.charAt(0).toUpperCase()}
                  </div>
                  <div className={styles.body}>
                    <p>{list.body}</p>
                    <small>{format(new Date(list.$createdAt), "PPPpp")}</small>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListItem;
