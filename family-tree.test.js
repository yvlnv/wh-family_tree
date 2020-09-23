// const {describe, test} = require('jest')

const familyTree = require('./family-tree')

describe('Family Tree', function () {
    test('I am in my family tree', function () {
        const me = familyTree[0]
        expect(me.name).toEqual('Yana')
    })

    test('My mother is also there', function () {
        const mother = familyTree[1]
        expect(mother.name).toEqual('Irina')
    })

    test('My mother is also there', function () {
        const grandma = familyTree[2]
        expect(grandma.name).toEqual('Valentina')
    })
})
