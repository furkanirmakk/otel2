
import Footer from './footer';
import Navbar from './navbar';
import Map from './Map';

function Iletisim() {
    const address = 'Fetih, Womco Plaza, Eski Çiftlik Yolu Cd No:7, 34100 Ataşehir/İstanbul';
    return (
        <div>
            <Navbar />
            <h1>İletişim</h1>
            <Map address={address} />
            <Footer />
        </div>
    );
}

export default Iletisim