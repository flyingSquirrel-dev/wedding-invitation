import Image from "next/image";

export default function FlowerFlake({ ...rest }) {
  return (
    <div {...rest}>
      <Image
        src="/images/flower-flake.svg"
        alt=""
        width="28"
        height="28"
        draggable={false}
        priority={false}
      />
    </div>
  );
}
