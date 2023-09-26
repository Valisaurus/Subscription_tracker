import Link from "next/link";
import CTRL from "../../public/svgs/CTRL+.svg";
import Image from "next/image";
const Logo = () => {
  return (
    <div className="absolute top-4 left-4 text-black dark:text-white">
      <Link href={"/"}>
        <Image src={CTRL} alt="CTRL+ logo" width={122} height={30} />
      </Link>
    </div>
  );
};

export default Logo;
