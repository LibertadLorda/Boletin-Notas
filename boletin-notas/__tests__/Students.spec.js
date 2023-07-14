import { describe, expect, test} from 'vitest'
import { mount } from '@vue/test-utils'
import Students from '../src/components/Students.vue'
import AppVue from '../src/App.vue'

describe('Students', () => {
  test ('Testear si las etiquetas principales (header - main ...) estan presentes', () =>{
  const wrapper = mount(Students)
  expect(wrapper.find('header').exists()).toBe(true)
  expect(wrapper.find('main').exists()).toBe(true)
})

  test ('Testear si el atributo "class" de la etiquetas html es la que tiene que ser', () =>{
    const wrapper = mount(Students)
    expect(wrapper.find('.container').exists()).toBe(true)
  })

  test ('Testear si el atributo "class" de la etiquetas html es la que tiene que ser', () =>{
    const wrapper = mount(Students)
    expect(wrapper.find('#idContainer').exists()).toBe(true)
  })
  
  test('El componente recibe props que pueda recibir datos', () => {
    const wrapper = mount(Students,{
      props: {
        nombre: String,
      }
    })
    expect(wrapper.props().nombre).toBe(String);
  });

  test('El nombre del alumno aparece en la tabla después de haber hecho click en el botón de añadir', async ()=>{
    const wrapper = mount(Students);
    await wrapper.find('input[type="text"]').setValue('Nombre del alumno');
    await wrapper.find('.add').trigger('click');
    expect(wrapper.find('.tabla').text()).toContain('Nombre del alumno');
  });

  test('Verificar que el nombre de la materia aparezca en la tabla', async () => {
    const wrapper = mount(Students);
    await wrapper.findAll('input[type="text"]')[1].setValue('Materia');
    await wrapper.find('.add').trigger('click');
    expect(wrapper.find('.tabla').text()).toContain('Materia');
  });

})

describe('App', () => {
  test ('Testear si un componente hijo está presente.', () =>{
    const wrapper = mount(AppVue)
  expect(wrapper.findComponent(Students).exists()).toBe(true)
})

})

