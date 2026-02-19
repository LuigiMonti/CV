<link rel="stylesheet" href="Lists.css"></link>


function Listas(optional: any){
    return(
        <div className="listas">
            <h3>{optional.titulo}</h3>
          <ul>
            <li>{optional.uno}</li>
            <li>{optional.dos}</li>
            {optional.tres && <li>{optional.tres}</li>} 
            {optional.cuatro && <li>{optional.cuatro}</li>} 
            {optional.cinco && <li>{optional.cinco}</li>} 
            {optional.seis && <li>{optional.seis}</li>} 

            
          </ul>
        </div>
    )}

export default Listas
