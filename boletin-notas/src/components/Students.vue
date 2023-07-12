<script setup>
import { ref } from 'vue';

const props = defineProps({
        nombre: String,
        materia: String,
    });

    const nombreStudiante = ref(" ");
    const materiaEstudiante = ref(" ");
    const alumnos = ref([]);

    const añadirAlumno = () =>{
      const nuevoAlumno = {
          nombre: nombreStudiante.value,
          materia: materiaEstudiante.value,
      };
    alumnos.value.push(nuevoAlumno);
    nombreStudiante.value = ''; 
    materiaEstudiante.value = ' ';
    }
</script>

<template>
<header></header>
    <main class="container" id="idContainer">
        <label for="nombreInput">Nombre del alumno: </label>
        <input id="nombreInput" type="text" v-model="nombreStudiante"/>
        <label for="materiaInput">Materia: </label>
        <input id="materiaInput" type="text" v-model="materiaEstudiante"/>
        <button class="add" @click="añadirAlumno">Añadir</button>

        <table class="tabla">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Materia</th>
            </tr>
        </thead>
        <tbody> 
          <tr v-for="alumno in alumnos" :key="alumno.nombre">
          <td>{{ alumno.nombre }}</td>
          <td>{{ alumno.materia }}</td>
        </tr>
        </tbody>
      </table>
    </main>
</template>
 
 <style>
/*  table {
   border-collapse: collapse;
   width: 100%;
 }
 
 th, td {
   text-align: left;
   padding: 8px;
 }
 
 input[type="text"] {
   margin: 8px 0;
   padding: 12px 20px;
   box-sizing: border-box;
   border: 2px solid #ccc;
   border-radius: 4px;
 }
 
 button {
   background-color: #4CAF50;
   color: white;
   padding: 14px 20px;
   margin: 8px 0;
   border: none;
   border-radius: 4px;
   cursor: pointer;
 }
 
 button:hover {
   background-color: #45a049;
 } */
 </style>