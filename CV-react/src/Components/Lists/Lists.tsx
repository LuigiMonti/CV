import './Lists.css'
import { ColorPipe } from '../../Pipes/Pipex'


function Listas({titulo, items}: {titulo: string, items: string[]}){
    return(
        <div className="listas">
            <h3>{titulo}</h3>
          <ul>
            {items.map((items, i) => <li key={i}><ColorPipe text={items} tipo={titulo.toLocaleLowerCase()}/></li>)}

            
          </ul>
        </div>
    )}

export default Listas
