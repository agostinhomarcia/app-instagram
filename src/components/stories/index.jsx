import { useState } from 'react';
import { Button, Flex, Typography } from '../../style'
import * as C from './style'
import Perfil from "../../assets/perfil.svg";

function Stories() {
    const [showAll, setShowAll] = useState(false);

    function handleShowAll(){
        setShowAll(!showAll)
    }

    const numberArry = showAll ?  20 : 8
  return (
    <Flex padding='8px 20px' align='start' gap='4px'>
        <Typography weight='400' size='18px' height='21px'>
            Stories
        </Typography>
        <Flex align='end'>
            <Button onClick={() => handleShowAll()}>
                <Typography  size='14px'>
                    {showAll ? 'Ver Mais' : 'Ver menos'}
                </Typography>
            </Button>

            <C.Container>
                {
                    Array.from(Array(numberArry)).map((item, index)=>(
                    <C.Profile key={index}>
                    <img
                        src={Perfil}
                        alt="imagem perfil github"
                    />
                    </C.Profile>
                    ))
                }
                
              
                </C.Container>

        </Flex>
    </Flex>
  )
}

export default Stories