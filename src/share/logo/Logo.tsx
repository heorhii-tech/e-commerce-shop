import Link from "next/link";

const Logo = () => {

    return (
        <Link href="/" className="logo">
            <p className="transition-colors duration-300 font-bold text-[26px] tracking-wide text-zinc-500 hover:text-zinc-800 cursor-pointer">SHOP.CO</p>
        </Link>
    );
};
export default Logo;