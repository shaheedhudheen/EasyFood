import Members from "./MembersClass";

const About = () => {
  return (
    <div className="about">
      <h1 className="about-h">About Us</h1>
      <p>this is the about page of the Easy Food Website</p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci,
        aspernatur voluptatem labore temporibus corrupti architecto dolores
        laborum quasi quia, odit numquam autem id ad ullam, reiciendis
        recusandae velit. Est iusto ad laborum quam voluptatum molestiae
        laboriosam debitis maxime vel tenetur totam rem velit aliquid sunt
        assumenda reiciendis cumque, perferendis dolorum!
      </p>

      <h1>Our Team</h1>
      <Members />
    </div>
  );
};

export default About;
