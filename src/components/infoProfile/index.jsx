import React from 'react'
import { AiFillHeart } from 'react-icons/ai';
import {FaRegComment } from 'react-icons/fa';
import { Flex, Typography } from '../../style';
import Perfil from "../../assets/perfil.svg";
import * as C from "./style";

function InfoProfile() {
  return (
    <Flex direction='row' align='center' justify='space-between'>
      <C.Container>
        <C.Link>
          <C.ProfileImage
            src={Perfil}
            alt="imagem perfil github" 
          />
          <Typography weight='300' size='13px' height='15px'>Taylor</Typography>
        </C.Link>
      </C.Container>

      <C.Container>
        <AiFillHeart color='red'/>
        <Typography weight='300' size='13px' height='15px'>1235</Typography>

        <FaRegComment/>
        <Typography weight='300' size='13px' height='15px'>85</Typography>

      </C.Container>
    </Flex>
  )
}

export default InfoProfile