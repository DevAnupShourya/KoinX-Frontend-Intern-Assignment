import { IconType } from "react-icons";

interface CarouselProps {
  color: string;
  id: string;
  icon: IconType;
}

function EventCarouselCard(props: CarouselProps) {
  const Icon = props.icon;

  return (
    <div
      id={props.id}
      className={`min-w-[60%] max-md:min-w-[80%] bg_${props.color}_light rounded-xl px-5 py-6 flex justify-between`}
    >
      <div className="px-2">
        <h1
          className={`w-14 h-14 rounded-full bg_${props.color}_dark grid place-items-center`}
        >
          <Icon className="text-3xl text-white" />
        </h1>
      </div>
      <div className="w-full">
        <h2 className="font-semibold max-md:text-base">
          Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis
          enim tincidunt.
        </h2>
        <p className="max-md:text-sm">
          Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
          faucibus metus quis. Amet sapien quam viverra adipiscing condimentum.
          Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra
          natoque lacinia libero enim.
        </p>
      </div>
    </div>
  );
}

export default EventCarouselCard;
