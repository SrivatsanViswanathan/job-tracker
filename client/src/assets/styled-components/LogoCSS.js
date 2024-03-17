import styled from 'styled-components';

const LogoCSS = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: var(--primary-500);
  img {
    width: 19.5%;
    height: auto;
  }
  h3 {
    font-weight: bold;
    margin-bottom: 0.2rem;
    font-size: 2rem;
  }
`;

export default LogoCSS;
