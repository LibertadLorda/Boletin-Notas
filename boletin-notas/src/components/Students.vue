<script setup>
import { ref } from 'vue';

const props = defineProps({
        nombre: String,
        materia: String,
        nota: Number,
    });
    const nombreStudiante = ref(" ");
    const materiaEstudiante = ref(" ");
    const notaEstudiante = ref(" ");
    const alumnos = ref([]);

    const añadirAlumno = () =>{
      alumnos.value.push({
        nombre: nombreStudiante.value,
        materia: materiaEstudiante.value,
        nota: notaEstudiante.value,
    });
    nombreStudiante.value = ' '; 
    materiaEstudiante.value = ' ';
    notaEstudiante.value = ' ';
  }
        const añadirNota = (nota) => {
          if (nota > 0 && nota < 3)
          {
            return "Muy deficiente";

          }
          else if (nota >=3 && nota <5){
            return "Insuficiente";
          }
          else if (nota >=5 && nota <6)
          {
            return "Suficiente";
          }
          else if (nota >6 && nota <7)
          {
            return "Bien";
          }
          else if (nota >=7 && nota <9){
            return "Notable";
          }
          else if (nota >=9 && nota <10){
            return "Sobresaliente";
            }
          else{
            return "No presentado";
          }
        };      
</script>

<template>
<header></header>
    <main class="container" id="idContainer">
        <label for="nombreInput">Nombre del alumno: </label>
        <input id="nombreInput" type="text" v-model="nombreStudiante"/>
        <label for="materiaInput">Materia: </label>
        <input id="materiaInput" type="text" v-model="materiaEstudiante"/>
        <label for="notaInput">Nota: </label>
        <input id="notaInput" type="text" v-model="notaEstudiante"/>
        <button class="add" @click="añadirAlumno">Añadir</button>

        <table class="tabla">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Materia</th>
                <th>Nota</th>
            </tr>
        </thead>
        <tbody> 
          <tr v-for="alumno in alumnos" :key="alumno.nombre">
          <td>{{ alumno.nombre }}</td>
          <td>{{ alumno.materia }}</td>
          <td>{{ alumno.nota }} - {{ añadirNota(alumno.nota)}}</td>
        </tr>
        </tbody>
      </table>
    </main>
</template>
 
 <style scoped>

@import url('https://fonts.googleapis.com/css2?family=Inconsolata&display=swap');

.container {
  
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  color: rgba(0, 0, 0, 0.526);
  font-family: 'Inconsolata';

}

label {
  margin: 10px;
}

input {
  padding: 5px;
  margin-bottom: 10px;
}

.add {
  font-family: 'Inconsolata';
  padding: 10px 20px;
  margin-top: 10px;
  background-color: #5f96de;
  border-radius: 20px;
  color: white;
  border: none;
  cursor: pointer;
}

.tabla {
  width: 100%;
  margin-top: 20px;
}

th
 {
  padding: 10px;
  text-align: center;
  border-bottom: 1px solid #ddd;
  background-color: #d4d634;
  color: rgba(0, 0, 0, 0.526);
  
}

td{
  padding: 10px;
  text-align: center;
}


</style>