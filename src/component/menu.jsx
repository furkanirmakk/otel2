import { Link } from 'react-router-dom';

function Menu() {
    return(
        <ul>
            <li><Link to='/'>Anasayfa</Link></li>
            <li><Link to='/hakkinda'>Hakkında</Link></li>
            <li><Link to='/iletisim'>İletişim</Link></li>
            <li><Link to='/odalarimiz'>Odalarmız</Link></li>
            <li><Link to='/standartOda'></Link>StandartOda</li>
        </ul>
    );
}

export default Menu