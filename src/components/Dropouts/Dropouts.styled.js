import styled from 'styled-components';

export const SectionBG = styled.section`
	background: #daecff;
`;

export const DropoutsDiv = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	margin-top: 17px;
`;

export const Title = styled.div`
	padding-top: 16px;
`;

export const Container = styled.div`
	padding-left: 20px;
	padding-right: 20px;
`;

export const GreenElipce = styled.div`
	width: 15px;
	height: 15px;
	margin-right: 18px;
	border-radius: 50%;
	background: #75e169;
	display: block;
`;

export const DropoutList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 10px;
	margin-bottom: 30px;
`;

export const DropoutItem = styled.li`
	display: flex;
	-webkit-box-align: center;
	align-items: center;
	flex-flow: row nowrap;
	-webkit-box-pack: justify;
	justify-content: space-between;
	width: 100%;
	height: auto;
	padding: 24px;
	background-color: #fff;
	border-radius: 10px;
	flex-direction: column;
`;

export const DropoutSubtitle = styled.p`
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: ${({ isOpen }) => (isOpen ? '800' : '400')};
	font-size: 17px;
	line-height: ${({ isOpen }) => (isOpen ? 'calc(27/17)' : '175%')};

	color: #111111;
`;

export const DropoutBtnVector = styled.button`
	border: transparent;
	background: transparent;
`;

export const ItemWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: row;
	flex-wrap: nowrap;
	width: 100%;
`;

export const ItemTitleWrapper = styled.div`
	display: flex;
	align-items: center;
`;

export const DropouttedDiv = styled.div`
	margin-top: 19px;
`;
export const DropoutText = styled.p`
	text-align: inherit;
	position: relative;
	padding-left: 25px;
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 400;
	font-size: 17px;
	line-height: 175%;

	color: #000000;

	&::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		width: 1px;
		background-color: #000000;
	}
`;
