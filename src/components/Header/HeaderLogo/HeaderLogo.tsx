import logo from '../../../assets/icons/logo.jpg';
import './HeaderLogo.scss';

const HeaderLogo = () => {
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a href="" className="header__body-logo">
      <img src={logo} alt="logo" />
    </a>
  );
};

export default HeaderLogo;
