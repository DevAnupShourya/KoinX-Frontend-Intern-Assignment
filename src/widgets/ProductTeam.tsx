import TeamMemberCard from "../components/TeamMemberCard";

function ProductTeam() {
  return (
    <div id="team" className="p-4 bg-bg-secondary rounded-xl mb-4">
      <p className="title">Team</p>
      <p className="text-lg my-2">
        Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
        nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
        quam. Facilisis purus convallis quam augue
      </p>
      <div>
        <TeamMemberCard
          imageUrl="./member-1.png"
          name="John Smith"
          position="Designation here"
        />
        <TeamMemberCard
          imageUrl="./member-2.png"
          name="Elina Williams"
          position="Designation here"
        />
        <TeamMemberCard
          imageUrl="./member-3.png"
          name="John Smith"
          position="Designation here"
        />
      </div>
    </div>
  );
}

export default ProductTeam;
