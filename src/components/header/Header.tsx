
import Logo from "./Logo";
import Nav from "./Nav";
import Link from "next/link";


const Header = () => {
    return(
        <header className="bg-dark-bckground sticky top-0 zx-[-20] mx-auto flex w-full item-center justify-between  p-8 flex-wrap">
            <Link href="/">
                <Logo />
            </Link>
            <Nav />
        </header>
    )
};

export default Header;