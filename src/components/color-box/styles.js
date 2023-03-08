import styled from 'styled-components';

const StyledBox = styled.div`
	width: 200px;
	height: 200px;
	background-color: ${({ color }) => color};
	margin-bottom: 10px;
	border-radius: 1rem;
`;
export { StyledBox };
