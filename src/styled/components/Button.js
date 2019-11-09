import styled from "styled-components";

const CustomButton = styled.button.attrs(() => ({
	type: "button"
}))`
	background-color: ${props => props.theme.background};
	color: ${props => props.theme.color};
`;

export default CustomButton;
