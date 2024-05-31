import { ContainerWarningMessage } from "./warningMessage.styled";
import { useState } from "react";

const WarningMessage = () => {
    const [deleteMessage, setDeleteMessage] = useState(false);

    return (
        <>
            {deleteMessage ?
                <></> :
                <ContainerWarningMessage>
                    <details>
                        <summary>Nota para el Usuario</summary>
                        <br />
                        <p>
                            Actualmente, todos los favoritos guardados se almacenan en una base de datos compartida. <b>Esto significa que todos los usuarios pueden ver los favoritos de otros.</b>
                        </p>
                        <br />
                        <p>
                            Estoy trabajando en implementar un sistema de autenticación que permitirá a cada usuario iniciar sesión y guardar sus favoritos de manera privada. <b>Agradezco tu paciencia mientras mejoro esta funcionalidad para ofrecer una experiencia más personalizada y segura.</b>
                        </p>
                        <br />
                        <p>
                            Además, estoy planeando mejoras significativas en el diseño de la web para hacerla más intuitiva y atractiva. <b>Gracias por tu comprensión y apoyo mientras continúo mejorando el sitio.</b>
                        </p>
                        <br />
                        <p>
                            <b>Nota:</b> Es posible que la aplicación funcione un poco más lenta de lo esperado ya que el servidor está alojado en Render. <b>Agradezco tu paciencia con la velocidad del sitio.</b>
                        </p>
                    </details>
                    <div className="btnDel" onClick={() => { setDeleteMessage(true) }}>X</div>
                </ContainerWarningMessage>
            }
        </>
    )
}

export default WarningMessage;
