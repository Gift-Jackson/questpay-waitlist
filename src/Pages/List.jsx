import ListItem from "../components/Waitlist/ListItem";
import PageTransition from "../components/transition/PageTransition";

const List = () => {
  return (
    <>
        <PageTransition>
          <ListItem/>
        </PageTransition>
    </>
  );
};

export default List;
