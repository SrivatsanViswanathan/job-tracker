import styled from 'styled-components';

const LandingCSS = styled.section`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }

  .slanted-background {
    content: '';
    display: flex;
    max-width: var(--max-width);
    min-height: 32vh;
    min-width: 90%;
    align-items: center;
    justify-content: center;
    background: var(--landing-bg);
    transform-origin: bottom right;
    transform: skewY(-5deg); /* Adjust the skew angle as needed */
    margin: 0 auto;
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }
  h1 {
    font-weight: 700;
    span {
      color: var(--primary-500);
    }
    margin-bottom: 1.5rem;
  }
  p {
    line-height: 2;
    color: var(--text-secondary-color);
    margin-bottom: 1.5rem;
    max-width: 35rem;
  }
  .register-link {
    margin-right: 1rem;
  }
  .main-img {
    display: none;
  }
  .btn {
    padding: 0.75rem 1rem;
  }
  @media (min-width: 768px) {
    .page {
      grid-template-columns: 1fr 400px;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }
  @media (min-width: 1024px) {
    .slanted-background {
      content: '';
      min-width: 45rem;
    }
  }
`;

export default LandingCSS;
