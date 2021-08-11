import{createStore} from './arrays'

describe('Haciendo pruebas a listas/Arrays',()=>{
    test('Probando agregar una nueva fruta',()=>{
        const store=createStore()
        store.addFruit('fresa')
        expect(store.getFruits()).toStrictEqual(['fresa'])
    })
    test('Probando agregar dos nuevas frutas',()=>{
        const store=createStore()
        store.addFruit('fresa')
        store.addFruit('melon')
        expect(store.getFruits()).toStrictEqual(['fresa','melon'])
    })
    test('Probando si contiene fruta especifica',()=>{
        const store=createStore()
        store.addFruit('manzana')
        store.addFruit('melon')
        store.addFruit('banana')
        expect(store.getFruits()).toContain('manzana')
        expect(store.getFruits()).not.toContain('mango')
    })
    test('Probando la longitud',()=>{
        const store=createStore()
        store.addFruit('manzana')
        store.addFruit('melon')
        store.addFruit('banana')
        expect(store.getFruits()).toHaveLength(3)
    })
    test('Probando agregar un objeto con info de frutas',()=>{
        const store=createStore()
        store.addFruit({
            name:'fruta',
            price: 10
        })
        expect(store.getFruits()).toContainEqual({name:'fruta',price: 10})
    })
})