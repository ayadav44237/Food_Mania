import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  // const [isVisible,setIsVisible]=useState(false);
  return (
    <>
      <div className="border-2 border-black p-2 m-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        {!isVisible ? (
          <button
            className="bg-pink-500 m-1 p-1 rounded-lg w-16"
            onClick={() => setIsVisible(true)}
          >
            show
          </button>
        ) : (
          <button
            className="bg-pink-500 m-1 p-1 w-16 rounded-lg"
            onClick={() => setIsVisible(false)}
          >
            Hide
          </button>
        )}

        {isVisible && <p>{description}</p>}
      </div>
    </>
  );
};
const Instamart = () => {
  // const [instaCongig, setInstaConfig] = useState({
  //   about: false,
  //   team: false,
  //   career: false,
  //   contact: false,
  // });
  const [visibleSection, setIsVisibleSection] = useState("team");
  return (
    <>
      <Section
        title={"About Instamart"}
        description={
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
        }
        isVisible={visibleSection === "about"}
        setIsVisible={() => setIsVisibleSection("about")}
      />
      <Section
        title={"Team Instamart"}
        description={
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
        }
        isVisible={visibleSection === "team"}
        setIsVisible={() => setIsVisibleSection("team")}
      />
      <Section
        title={"Career Instamart"}
        description={
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
        }
        isVisible={visibleSection === "career"}
        setIsVisible={() => setIsVisibleSection("career")}
      />
      <Section
        title={"ContactUs Instamart"}
        description={
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
        }
        isVisible={visibleSection === "contact"}
        setIsVisible={() => setIsVisibleSection("contact")}
        // setIsVisible={() =>
        //   setInstaConfig({
        //     about: false,
        //     team: false,
        //     career: false,
        //     contact: true,
        //   })
        // }
      />
    </>
  );
};
export default Instamart;
