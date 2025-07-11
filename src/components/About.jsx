import { useState } from "react";
import Section from "./Section";

const About = () => {
  const [option, setOption] = useState("");

  return (
    <div className="text-4xl flex flex-col items-center">
      <Section
        title={"About 1"}
        isVisible={option === "1"}
        setVisible={() => setOption(option === "1" ? "" : "1")}
        desc={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."}
      />
      <Section
        title={"About 2"}
        isVisible={option === "2"}
        setVisible={() => setOption(option === "2" ? "" : "2")}
        desc={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."}
      />
      <Section
        title={"About 3"}
        isVisible={option === "3"}
        setVisible={() => setOption(option === "3" ? "" : "3")}
        desc={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."}
      />
    </div>
  );
};

export default About;
