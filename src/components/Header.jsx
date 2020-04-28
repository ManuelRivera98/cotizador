import React from 'react'
import styled from '@emotion/styled'

import PropTypes from 'prop-types';

const ContainerHeader = styled.header`
  background: #26C6DA;
  padding: 10px;
  font-weight: bold;
  color: #FFF;
`;

const TextHeader = styled.h1`
  font-size: 2rem;
  margin:0;
  font-family: 'Slabo 27px', serif;
  text-align: center;
`;

const Header = ({ title }) => {
  return ( 
    <ContainerHeader>
      <TextHeader>{title}</TextHeader>
    </ContainerHeader>
   );
}

Header.propTypes = {
  title: PropTypes.string,
};
 
export default Header;