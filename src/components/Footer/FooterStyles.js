import styled from "styled-components";

// Styled Footer Component
export const FooterWrapper = styled.footer`
  background-color: #111; /* Dark background */
  color: #fff; /* White text */
  text-align: center;
  padding: 20px 10px;
  font-size: 1rem;
  position: relative;
  bottom: 0;
  width: 100%;

  /* Responsive text size for smaller devices */
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  a {
    color: #00d1ff; /* Highlighted links */
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #009ecb; /* Link hover effect */
    }
  }

  p {
    margin: 5px 0;
  }
`;
