import {
	DropoutsDiv,
	SectionBG,
	Title,
	Container,
	GreenElipce,
	DropoutList,
	DropoutItem,
	DropoutSubtitle,
	DropoutBtnVector,
	ItemWrapper,
	ItemTitleWrapper,
	DropouttedDiv,
	DropoutText
} from './Dropouts.styled';
import React, { useState } from 'react';
import VectorUp from '../../image/VectorUp.png';
import VectorDown from '../../image/VectorDown.png';

const Dropouts = () => {
	// const [isOpen, setIsOpen] = useState(false);

	// const toggleDropdown = () => {
	// 	setIsOpen(!isOpen);
	// };

	const [isOpen, setIsOpen] = useState([false, false, false, false, false]);

	const toggleDropdown = (index) => {
		const updatedOpenState = isOpen.map((item, i) =>
			i === index ? !item : item
		);
		setIsOpen(updatedOpenState);
	};

	return (
		<SectionBG>
			<Container>
				<div>
					<Title>
						<h2 style={{ textAlign: 'center' }}>
							Что входит в услугу <br />
							по созданию дизайна интернет-магазина?
						</h2>
					</Title>
					<DropoutsDiv>
						<DropoutList>
							<DropoutItem>
								<ItemWrapper>
									<ItemTitleWrapper>
										{' '}
										<GreenElipce
											style={{ backgroundColor: isOpen[0] ? 'blue' : '' }}
										></GreenElipce>
										<DropoutSubtitle isOpen={isOpen[0]}>
											Дизайн портала
										</DropoutSubtitle>
									</ItemTitleWrapper>
									<DropoutBtnVector onClick={() => toggleDropdown(0)}>
										{isOpen[0] ? (
											<img
												src={VectorUp}
												alt="VectorUp"
												width={24}
												height={13}
											/>
										) : (
											<img
												src={VectorDown}
												alt="VectorDown"
												width={24}
												height={13}
											/>
										)}
									</DropoutBtnVector>
								</ItemWrapper>
								{isOpen[0] && (
									<DropouttedDiv>
										<DropoutText>
											Дизайн портала — это оформление контента, совокупность
											всех графических элементов на веб-странице. Основная
											задача дизайна — познакомить пользователя со страницей.
											Продуманный дизайн создает нужное впечатление о компании.
										</DropoutText>
									</DropouttedDiv>
								)}
							</DropoutItem>
							<DropoutItem>
								<ItemWrapper>
									<ItemTitleWrapper>
										{' '}
										<GreenElipce
											style={{ backgroundColor: isOpen[1] ? 'blue' : '' }}
										></GreenElipce>
										<DropoutSubtitle isOpen={isOpen[1]}>
											Дизайн адаптивной мобильной версии
										</DropoutSubtitle>
									</ItemTitleWrapper>
									<DropoutBtnVector onClick={() => toggleDropdown(1)}>
										{isOpen[1] ? (
											<img
												src={VectorUp}
												alt="VectorUp"
												width={24}
												height={13}
											/>
										) : (
											<img
												src={VectorDown}
												alt="VectorDown"
												width={24}
												height={13}
											/>
										)}
									</DropoutBtnVector>
								</ItemWrapper>
								{isOpen[1] && (
									<DropouttedDiv>
										<DropoutText>
											Мобильная версия сайта удобна для пользователя, потому что
											сильно упрощена по сравнению с обычной версией. Мобильная
											версия позволяет совершать заказ/покупку <br />с минимумом
											действий. При адаптивной версии вся структура сайта
											автоматически подстраивается под различную ширину экрана.
										</DropoutText>
									</DropouttedDiv>
								)}
							</DropoutItem>
							<DropoutItem>
								<ItemWrapper>
									<ItemTitleWrapper>
										{' '}
										<GreenElipce
											style={{ backgroundColor: isOpen[2] ? 'blue' : '' }}
										></GreenElipce>
										<DropoutSubtitle isOpen={isOpen[2]}>
											Дизайн десктопной версии
										</DropoutSubtitle>
									</ItemTitleWrapper>
									<DropoutBtnVector onClick={() => toggleDropdown(2)}>
										{isOpen[2] ? (
											<img
												src={VectorUp}
												alt="VectorUp"
												width={24}
												height={13}
											/>
										) : (
											<img
												src={VectorDown}
												alt="VectorDown"
												width={24}
												height={13}
											/>
										)}
									</DropoutBtnVector>
								</ItemWrapper>
								{isOpen[2] && (
									<DropouttedDiv>
										<DropoutText>
											Десктопную версию сайта просматривают пользователи со
											стационарных компьютеров. Основная цель: посерфить,
											углубиться в детали, получить больше информации, сравнить,
											выбрать, прицениться.
										</DropoutText>
									</DropouttedDiv>
								)}
							</DropoutItem>
							<DropoutItem>
								<ItemWrapper>
									<ItemTitleWrapper>
										{' '}
										<GreenElipce
											style={{ backgroundColor: isOpen[3] ? 'blue' : '' }}
										></GreenElipce>
										<DropoutSubtitle isOpen={isOpen[3]}>
											Пользовательский интерфейс
										</DropoutSubtitle>
									</ItemTitleWrapper>
									<DropoutBtnVector onClick={() => toggleDropdown(3)}>
										{isOpen[3] ? (
											<img
												src={VectorUp}
												alt="VectorUp"
												width={24}
												height={13}
											/>
										) : (
											<img
												src={VectorDown}
												alt="VectorDown"
												width={24}
												height={13}
											/>
										)}
									</DropoutBtnVector>
								</ItemWrapper>
								{isOpen[3] && (
									<DropouttedDiv>
										<DropoutText>
											Цель дизайна пользовательского интерфейса - сделать
											взаимодействие максимально простым и эффективным,
											насколько это возможно, с точки зрения достижения целей
											пользователя.
										</DropoutText>
									</DropouttedDiv>
								)}
							</DropoutItem>
							<DropoutItem>
								<ItemWrapper>
									<ItemTitleWrapper>
										{' '}
										<GreenElipce
											style={{ backgroundColor: isOpen[4] ? 'blue' : '' }}
										></GreenElipce>
										<DropoutSubtitle isOpen={isOpen[4]}>
											Микро UX
										</DropoutSubtitle>
									</ItemTitleWrapper>
									<DropoutBtnVector onClick={() => toggleDropdown(4)}>
										{isOpen[4] ? (
											<img
												src={VectorUp}
												alt="VectorUp"
												width={24}
												height={13}
											/>
										) : (
											<img
												src={VectorDown}
												alt="VectorDown"
												width={24}
												height={13}
											/>
										)}
									</DropoutBtnVector>
								</ItemWrapper>
								{isOpen[4] && (
									<DropouttedDiv>
										<DropoutText>
											Микро-анимация может изменить восприятие продукта,
											пользовательское поведение и повысить конверсию.
											Небольшие, преимущественно функциональные анимации
											поддерживают пользователя: обеспечивают визуальную
											обратную связь и более понятно отражают происходящие
											изменения.
										</DropoutText>
									</DropouttedDiv>
								)}
							</DropoutItem>
						</DropoutList>
					</DropoutsDiv>
				</div>
			</Container>
		</SectionBG>
	);
};

export default Dropouts;
