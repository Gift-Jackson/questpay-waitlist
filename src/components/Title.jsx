import PropTypes from 'prop-types'
import styles from "./title.module.css"
const Title = ({title="Heading", subtitle="Some cool subtitle right here"}) => {
  return (
      <>
          <div className={styles.title}>
              <h2>{title}</h2>
              <p>{subtitle}</p>
      </div>
      </>
  )
}

Title.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string
}

export default Title