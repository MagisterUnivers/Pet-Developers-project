import { BurgerMenu, HeaderBox, NavStyled } from './Header.styled';
import Logo from '../../image/Frame.png';
import BurgerElipse from '../../image/Ellipse 11.svg';

const Header = () => {
	return (
		<header>
			<HeaderBox>
				<NavStyled>
					<a href="/">
						<img
							className="logo"
							src={Logo}
							alt="Logo"
							width={136}
							height={35}
						/>
					</a>
					<BurgerMenu>
						<img src={BurgerElipse} alt="Elipce" width={13} height={13} />
						<img src={BurgerElipse} alt="Elipce" width={13} height={13} />
						<img src={BurgerElipse} alt="Elipce" width={13} height={13} />
					</BurgerMenu>
				</NavStyled>
			</HeaderBox>
		</header>
	);
};

export default Header;
