function getEstudiantesconNombreyNotaAlta(estudiante) {
    return estudiante.map(array => (
          { nambre: array.nambre, NotaAlta: array.notas[0] 
           ? Math.max(...array.notas) : 0 }));
}

const estudiante = { nombre: 'Jacek', notas: [ 5, 4, 3 ] };

/*{ nombre: 'Ewa', notas: [ 3, 3, 3 ] },
{ nombre: 'Zygmunt', notas: [ 1, 2, 3 ] };*/