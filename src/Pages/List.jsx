import ListItem from "../components/Waitlist/ListItem";
import PageTransition from "../components/transition/PageTransition";

const List = () => {
  return (
    <>
      <div className="main-container">
        <PageTransition>
          <ListItem/>
        </PageTransition>
      </div>
    </>
  );
};

export default List;
