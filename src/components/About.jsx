import Members from "./MembersClass";

const About = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <h1 className="text-4xl my-8 font-bold text-center">About Us</h1>
      <p className="text-2xl my-4 font-normal">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus culpa hic
        veritatis repellendus illum? Vitae dignissimos earum voluptatum,
        incidunt unde fugit temporibus vel illum at veritatis officia, iste
        voluptatem ducimus!
      </p>
      <p className="text-2xl my-4 font-thin">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci,
        aspernatur voluptatem labore temporibus corrupti architecto dolores
        laborum quasi quia, odit numquam autem id ad ullam, reiciendis
        recusandae velit. Est iusto ad laborum quam voluptatum molestiae
        laboriosam debitis maxime vel tenetur totam rem velit aliquid sunt
        assumenda reiciendis cumque, perferendis dolorum!
      </p>

      <p className="text-center my-4 font-medium text-3xl">Our Team</p>
      <Members />
    </div>
  );
};

export default About;
