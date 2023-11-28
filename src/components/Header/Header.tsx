import HeaderLogo from './HeaderLogo/HeaderLogo';
import Navigation from './Navigation/Navigation';
import ButtonHelp from '../buttons/ButtonHelp/ButtonHelp';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__body">
        <HeaderLogo />
        <Navigation />
        <ButtonHelp />
      </div>
    </header>
  );
};

export default Header;
