import styles from './nopage.module.css'
import lost from "../../assets/lost.svg"
import { Link } from 'react-router-dom'

const NoPage = () => {
  return (
      <>
       <div className="main-container">
              <div className={styles.container}>
                  <div className={styles.content}>
                      <div >
                          <img src={lost} height={250} alt="" />
                      </div>
                      <div className={styles.info}>
                          <h1>404</h1>
                          <p>Hold on chief, I still dey cook! 🤚</p>
                      </div>
                      <Link to="/">
                  <label className={styles.back}><i className="fa-solid fa-arrow-left"></i> &nbsp;<span>Go back</span></label>
                  </Link>
                  </div>
          </div>
          </div>
      
      </>
  )
}

export default NoPage