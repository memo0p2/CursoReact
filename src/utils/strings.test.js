import {saluda,getId,despide} from './strings'
describe('Pruebas de strings',()=>{

    const saludo=saluda('Guillermo')
    const id=getId()
    const despideF=despide()

    test('Probando la funcion saluda',()=>{
        expect(saludo).toMatch('Hola soy')
    })

    test('Probando la funcion getId',()=>{
        expect(id).toMatch(/\d{2}-\d{3}/)
    })

    test('Probando la funcion despide',()=>{
        //expect(despideF).not.toMatch('Bye')
    })

})