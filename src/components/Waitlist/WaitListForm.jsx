import { motion } from 'framer-motion';
import styles from './waitlist.module.css'


const WaitListForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }
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
                              <input type="text" placeholder='e.g Gift Jackson' />
                              <i className="fa-regular fa-user"></i>
                          </div>
                      </div>
                      <div className={styles.grp}>
                          <label htmlFor="name">E-mail Address:</label>
                          <div className={styles.inp}>
                              <input type="email" placeholder='e.g hello@world.com' />
                              <i className="fa-regular fa-envelope"></i>
                          </div>
                      </div>
                      <motion.button
                          whileHover={{
                              scale: 1.1
                          }}
                          whileTap={{
                              scale:0.8
                          }}
                          type="submit" className={styles.btn}>Submit</motion.button>
                  </form>
              </div>
              <p className={styles.info}>Join our waitlist today and be the first to access the future of financial convenience with <span className='mark'>QuestPay</span>.</p>

          </div>
    </div>
  )
}

export default WaitListForm