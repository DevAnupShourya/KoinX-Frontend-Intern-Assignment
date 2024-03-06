interface MemberProps {
  name: string;
  imageUrl: string;
  position: string;
}

function TeamMemberCard(props: MemberProps) {
  return (
    <div className="p-4 my-4 bg-blue-100 flex_row_center max-md:flex-wrap rounded-lg gap-4">
      <div className="w-1/4 max-md:w-full max-md:text-center">
        <img
          src={props.imageUrl}
          alt={`${props.name}'s Image`}
          className="mx-auto w-32 h-32 rounded-md"
        />
        <p className="text-center font-bold capitalize mt-2">{props.name}</p>
        <p className="text-center text-sm">{props.position}</p>
      </div>
      <div className="w-3/4 max-md:w-full">
        <p className="text-pretty my-2">
          Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
          fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in
          nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec
          neque sed pellentesque viverra. Consectetur proin amet ut id facilisi
          quis consectetur. Tellus gravida ultricies feugiat sed eu egestas
          dolor est ipsum. Malesuada etiam mi gravida praesent interdu
        </p>
      </div>
    </div>
  );
}

export default TeamMemberCard;
