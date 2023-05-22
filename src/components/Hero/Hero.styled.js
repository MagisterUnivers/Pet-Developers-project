import styled from 'styled-components';

export const HeroTitle = styled.h1`
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 800;
	font-size: 27px;
	line-height: 120%;

	margin-bottom: 22px;
	text-transform: uppercase;

	color: #000000;
`;

export const Subtitle = styled.p`
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 140%;

	margin-bottom: 34px;
	color: #000000;
`;

export const Container = styled.div`
	margin-top: -238px;
	padding-left: 20px;
	padding-right: 20px;
`;

export const OrderBtn = styled.button`
	background: #75e169;
	border-radius: 10px;
	padding: 17px 123px 17px 123px;
	margin-bottom: 51px;

	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 700;
	font-size: 15px;
	line-height: 175%;
	border: none;
	cursor: pointer;

	text-transform: uppercase;

	color: #ffffff;
`;

export const HeroImg = styled.img`
	margin-top: 28px;
	z-index: 20;
	position: relative;
`;

export const HeroImgSphere = styled.img`
	position: absolute;
	top: 322px;
	right: 24px;
`;
