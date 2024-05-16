import styles from './hero.module.css'
import avatar1 from '../../assets/avatar-1.avif'
import avatar2 from '../../assets/avatar-2.avif'
import avatar3 from '../../assets/avatar-3.avif'
import avatar4 from '../../assets/avatar-4.avif'
import avatar5 from '../../assets/avatar-5.avif'
import { Link } from 'react-router-dom'
const Hero = () => {
    return (
        <>
            <div className='main-container'>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <span className={styles.span_text}>Bill payment made easy</span>
                        <h1>Unlock <span className={styles.mark}>Unbeatable</span> Rates for Data, Airtime, and Utility Bills</h1>
                        <p> Discover the convenience of <span className="mark">QuestPay</span> today! Access incredibly affordable rates for purchasing data, airtime, paying utility bills and many more...</p>

                        <div className={styles.avatar_grp}>
                            <div className={styles.text}>...Waiting</div>
                            <div className={styles.count}>
                                50+
                            </div>
                            <div className={styles.avatar}>
                                <img src={avatar1} alt="avatar" className={styles.img} />
                            </div>
                            <div className={styles.avatar}>
                                <img src={avatar2} alt="avatar" className={styles.img} />
                            </div>
                            <div className={styles.avatar}>
                                <img src={avatar3} alt="avatar" className={styles.img} />
                            </div>
                            <div className={styles.avatar}>
                                <img src={avatar4} alt="avatar" className={styles.img} />
                            </div>
                            <div className={styles.avatar}>
                                <img src={avatar5} alt="avatar" className={styles.img} />
                            </div>
                        </div>

                        <div className={styles.btns}>
                            <a href="#" target='_blank'>
                                <button className={styles.btn_1}>
                                    <i className="fa-solid fa-people-roof"></i>  Join Community
                                </button>
                            </a>
                            <Link to="/waitlist">
                                <button className={styles.btn_2}>
                                    Join Waitlist <i className="fa-solid fa-people-group"></i>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero