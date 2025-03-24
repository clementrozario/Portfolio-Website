import LeftSection from "../components/LeftSection";
import RightSection from "../components/RightSection";

const Layout = () => {
    return(
        <div className="min-h-screen flex flex-col md:flex-row px-6 md:px-16 lg:px-24">
            
            <div className="w-full md:w-1/2 md:h-screen md:sticky md:top-0 flex-none">
                <LeftSection />
            </div>

            <div className="w-full md:w-1/2 mt-10 md:mt-0">
                <RightSection />
            </div>

        </div>
    )
}

export default Layout;