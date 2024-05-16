import NoPage from "../components/NoPage";
import PageTransition from "../components/transition/PageTransition";

const NotFound = () => {
  return (
    <>
      <PageTransition>
        <NoPage />
      </PageTransition>
    </>
  );
};

export default NotFound;
