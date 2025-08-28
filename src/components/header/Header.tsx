
import Logo from "./Logo";
import Nav from "./Nav"


const Header = () => {
    return(
        <header className="bg-dark-bckground sticky top-0 zx-[20] mx-auto flex w-full item-center justify-between  p-8 flex-wrap">
            <Logo/>
            <Nav />
        </header>
    )
};

export default Header;