import ContactForm from "../components/contacts/ContactForm"
import PageTransition from "../components/transition/PageTransition"

const ContactPage = () => {
  return (
      <>
          <PageTransition>
              <ContactForm/>
      </PageTransition>
      </>
  )
}

export default ContactPage