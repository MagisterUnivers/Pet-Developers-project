import {
	Container,
	HeroImg,
	HeroImgSphere,
	HeroTitle,
	OrderBtn,
	Subtitle
} from './Hero.styled';

const Hero = () => {
	return (
		<section>
			<div>
				<HeroImg
					src={require('../../image/ill.png')}
					alt="HeroAlt"
					width={377}
					height={546}
				/>{' '}
				<HeroImgSphere
					src={require('../../image/shape sphere.264.png')}
					alt="HeroAlt"
					width={26}
					height={26}
				/>
				<Container>
					<HeroTitle>Разработка интернет-магазина с нуля за неделю</HeroTitle>
					<Subtitle>
						Дизайн интернет магазина, элементов микро UX, корзин, личного
						кабинета -<br />
						от фирменного стиля <br />
						до пользовательского интерфейса <br />в сжатые сроки с командой{' '}
						<br />
						Virtual Designers
					</Subtitle>
					<OrderBtn type="button">Заказать</OrderBtn>
				</Container>
			</div>
		</section>
	);
};

export default Hero;
