import './Navbar.css';
import homeIcon from '../../assets/home-icon-selected.svg';
import historicoIcon from '../../assets/historico-icon.svg';
import acessibilidadeIcon from '../../assets/acessibilidade-icon.svg';



function Navbar() {
    return (
        <div className='navbar' style={{ position: 'fixed', bottom: 0 , zIndex: 1000 }}>
            <div className='container-navbar'>
                <div className='icon'>
                    <a href="">
                        <img src={homeIcon} alt='Tela inicial' ></img>
                        <p>Tela inicial</p>
                    </a>
                </div>

                <div className='icon'>
                    <a href="">
                        <img src={historicoIcon} alt='Histórico' ></img>
                        <p>Histórico</p>
                    </a>
                </div>

                <div className='icon'>
                    <a href="">
                        <img src={acessibilidadeIcon} alt='Acessibilidade' ></img>
                        <p>Acessibilidade</p>
                    </a>
                </div>

            </div>
        </div>
    )
}

export default Navbar;