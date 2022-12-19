import { Typography } from "../../style";
import InfoProfile from "../infoProfile";
import Perfil from "../../assets/perfil.svg";

import * as C from "./style";

function Publications() {
    return (
        <C.Container>
            <Typography>Publicações</Typography>
            <C.ContainerPublications>
                {
                    Array.from(Array(20)).map((item, index) => (
                        <C.Content>
                            <C.PublicationImage

                                src={Perfil}
                                alt="imagem perfil github"

                            />
                            <InfoProfile />
                        </C.Content>
                    ))
                }

            </C.ContainerPublications>
        </C.Container>
    )
}

export default Publications