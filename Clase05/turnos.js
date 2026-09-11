function mostrarTurnos(turno) {
    console.log(`Paciente: ${turno.paciente}`);
}
export function confirmarTurno(turno){
    return {
        ...turno,
        estado: "confirmado"
        
    };
}
