import LeftSection from "../components/LeftSection";
import RightSection from "../components/RightSection";

const Layout = () => {
    return(
        <div className="min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-16 lg:px-24">
            
            <div className="w-full md:w-1/2">
                <LeftSection />
            </div>

            <div className="w-full md:w-1/2 mt-10 md:mt-0">
                <RightSection />
            </div>

        </div>
    )
}

export default Layout;