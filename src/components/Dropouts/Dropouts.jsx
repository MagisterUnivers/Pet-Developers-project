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
						<h2>
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
						</DropoutList>
					</DropoutsDiv>
				</div>
			</Container>
		</SectionBG>
	);
};

export default Dropouts;
