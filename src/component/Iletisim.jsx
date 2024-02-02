
import Footer from './footer';
import Navbar from './navbar';
import Map from './Map';

function Iletisim() {
    const address = 'Fetih, Womco Plaza, Eski Çiftlik Yolu Cd No:7, 34100 Ataşehir/İstanbul';
    return (
        <div>
            <Navbar />
            <Map  />
           <Footer />
        </div>
    );
}

export default Iletisim