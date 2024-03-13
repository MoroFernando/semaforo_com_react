import { useState, useEffect} from "react";
import Luz from "./Luz.jsx";

const Semaforo = () => {

    const [cor, setCor] = useState([null, null, null]);
    const [duracao, setDuracao] = useState(null);

    const mudaSinal = () => {

        setTimeout(() => {

            if (cor.includes("vermelho")) { setCor([null, null, "verde"]); setDuracao(4000); }

            else if (cor.includes("verde")) { setCor([null, "amarelo", null]); setDuracao(1000); }

            else if (cor.includes("amarelo")) { setCor(["vermelho", null, null]); setDuracao(4000); }

            else { setCor(["vermelho", null, null]); setDuracao(6000); }

        }, duracao)

    }

    useEffect(mudaSinal, [cor]);

    return(
        <div className="semaforo">
            <Luz cor={cor[0]}/>
            <Luz cor={cor[1]}/> 
            <Luz cor={cor[2]}/>
        </div>
    )
}

export default Semaforo;