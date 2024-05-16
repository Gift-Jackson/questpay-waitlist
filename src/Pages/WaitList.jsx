import WaitListForm from "../components/Waitlist/WaitListForm";
import PageTransition from "../components/transition/PageTransition";

const WaitList = () => {
  return (
    <>
      <div className="main-container">
        <PageTransition>
          <WaitListForm />
        </PageTransition>
      </div>
    </>
  );
};

export default WaitList;
