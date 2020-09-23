// const {describe, test} = require('jest')

const familyTree = require('./family-tree')

describe('Family Tree', function () {
    test('I am in my family tree', function () {
        const me = familyTree[0]
        expect(me.name).toEqual('Yana')
    })

    test('My age is added', function () {
        const me = familyTree[0]
        expect(me.age).toEqual(7)
    })

    test('My mother is also there', function () {
        const mother = familyTree[1]
        expect(mother.name).toEqual('Irina')
    })

    test('My mother is also there', function () {
        const grandma = familyTree[2]
        expect(grandma.name).toEqual('Valentina')
    })

    test('Mum is older that me', function () {
        const me = familyTree[0]
        const mother = familyTree[1]
        expect(mother.age).toBeGreaterThan(me.age)
    })

    test('My parents have differet sex', function () {
        const me = familyTree[0]
        const mother = familyTree[1]
        const father = familyTree[3]
        expect(mother.sex).not.toEqual(father.sex)
    })
})
