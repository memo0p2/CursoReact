import{createStore} from './objects'

describe('Test a objetos',()=>{
    test('agregar un item en store',()=>{
        const store=createStore()
        store.addItem({
            name:'gerardo',
            id: 1,
            country:'Mexico'
        })

        expect(store.getStore()[0]).toEqual({
            name:'gerardo',
            id: 1,
            country:'Mexico'
        })
    })

    test('buscar un item por id',()=>{
        const store=createStore()
        store.addItem({
            name:'gerardo',
            id: 1,
            country:'Mexico'
        })

        expect(store.getById(1 )).toEqual({
            name:'gerardo',
            id: 1,
            country:'Mexico'
        })

        expect(store.getById(1 )).toMatchObject({
            name:'gerardo'
        })

        expect(store.getById(1 )).toHaveProperty('name','gerardo')
    })

})