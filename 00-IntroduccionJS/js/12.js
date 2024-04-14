const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Nest.js', 'TypeScript']

// for(let i = 0; i < tecnologias.length; i++) {
//     console.log(tecnologias[i] )
// }

// forEach
// tecnologias.forEach(function(tech) {
//     console.log(tech)
// })

// map
const arrayMap = tecnologias.map(function(tech) {
    return tech
})

// for ... of
for(let tech of tecnologias) {
    console.log(tech)
}

// console.log(arrayMap)