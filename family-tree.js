let childOf = function () {}
// return "parents unknown" if both parents unknown
childOf = function () {return this.parents.map(p => p.name).join(' & ') || "parents unknown"}
// several lines object crearion
const yana = {}
yana.name = 'Yana'
yana.age = 7
yana.parents = []
yana['full-name'] = 'Yana Volnova'
yana.childOf = childOf
// one line object creation
const irina = {name: 'Irina', age: 38, sex: 'female', parents: [], childOf}
const yuri = {name: 'Yuri', age: 38, sex: 'male', parents: [], childOf}
const valentina = {name: 'Valentina', age: '68', parents: [], childOf}
const ivan = {name: 'Ivan', parents: [], childOf}
const sergey = {name: 'Sergey', parents: [], childOf}
const sergey_jr = {name: 'Sergey', parents: [], childOf}
const anna = {name: 'Anna', parents: [], childOf}
const nikolay = {name: 'Nikolay', parents: [], childOf}
const tatiana = {name: 'Tatiana', parents: [], childOf}
const mikhail = {name: 'Mikhail', parents: [], childOf}
const avdotya = {name: 'Avdotya', parents: [], childOf}
const inga = {name: 'Inga', parents: [], childOf}
const leonid = {name: 'Leonid', parents: [], childOf}
// one by one array fill up
yana.parents[0] = irina
yana.parents[1] = yuri
irina.parents[0] = valentina
irina.parents[1] = ivan
sergey.parents[0] = valentina
sergey.parents[1] = ivan
anna.parents[0] = sergey
sergey_jr.parents[0] = sergey
// one line array fill up
yuri.parents = [inga, leonid]
valentina.parents = [avdotya, mikhail]
ivan.parents = [tatiana, nikolay]
// generation arrays
gen1 = [yana, anna, sergey_jr]
gen2 = [irina, yuri, sergey]
gen3 = [valentina, ivan, inga, leonid]
gen4 = [avdotya, mikhail, tatiana, nikolay]
// decided to add Sergey's wife and use push for arrays
const irina1 = {name: 'Irina', parents: [], childOf}
anna.parents.push(irina1)
sergey_jr.parents.push(irina1)
gen2.push(irina1)

// export for testing
module.exports = [yana, irina, valentina, yuri]