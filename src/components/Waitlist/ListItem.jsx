import styles from "./list.module.css";
import Title from "../Title";
import { databases, DATABASE_ID, COLLECTION_ID } from "../../appwriteConfig";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { Query } from "appwrite";

const ListItem = () => {
  const [lists, setList] = useState([])
  useEffect(() => {
    getMessages();
  }, []);

  const getMessages = async () => {
    const promise = await databases.listDocuments(DATABASE_ID, COLLECTION_ID,
      [
        Query.orderDesc('$createdAt')
      ]
    );
    console.log(promise);
    setList(promise.documents)
  };
  return (
    <>
      <div className={styles.content}>
        <Title
          title="Wait List"
          subtitle="Do you see yourself and your friends?"
        />
        <div className={styles.mem}>
          <small>Members: {lists.length }</small>
        </div>
        <ul className={styles.list}>
          
          {lists.map((list) => (
            <li className={styles.item} key={list.$id}>
            <div className={styles.initial}>{list.body.charAt(0).toUpperCase()}</div>
              <div className={styles.body}>
                <p>{list.body}</p>
                <small>{format(new Date(list.$createdAt), 'PPPpp')}</small>
              </div>
          </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ListItem;
