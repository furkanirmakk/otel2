
import Hakkinda from './Hakkinda';
import Footer from './footer';
import Navbar from './navbar';
import OurServices from './ourServices';
import Gallery from './Gallery';
function Anasayfa() {
    return (
        <div>
            <Navbar />
            <Hakkinda />
            <Gallery/>
            <OurServices />
            
            <Footer />
        </div>
    );
}
export default Anasayfa