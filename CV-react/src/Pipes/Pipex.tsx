

export function ColorPipe({text, tipo}: {text: string, tipo: string}){
    const colores: {[key: string]: string} ={
        skill: '#c8f135',
        experiencia: '#f13565',
        estudio: '#35b4f1'
    }
     return <span style={{color: colores[tipo]}}>{text}</span>
}
   