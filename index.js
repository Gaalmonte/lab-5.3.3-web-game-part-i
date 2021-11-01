// let greenCharacter = document.createElement('img')
// greenCharacter.src = 'assets/green-character.gif'
// greenCharacter.style.position = 'fixed'
// greenCharacter.style.left = '100px'
// greenCharacter.style.bottom = '100px'
// document.body.append(greenCharacter)

// let pineTree = document.createElement('img')
// pineTree.src = 'assets/pine-tree.png'
// pineTree.style.position = 'fixed'
// pineTree.style.left = '450px'
// pineTree.style.bottom = '200px'
// document.body.append(pineTree) 

    // DEFINING ADDING A NEW IMAGE FUNCTION
    function newImage(source, left, bottom) {
        let generic = document.createElement('img')
        generic.src = source
        generic.style.position = 'fixed'
        generic.style.left = left + 'px'
        generic.style.bottom = bottom + 'px'
        document.body.append(generic)
        return generic
      }
    
    //   DEFINING ADDING A NEW ITEM FUNCTION
    function newItem(source,left,bottom){
        let generic = newImage(source, left, bottom)
        generic.addEventListener('dblclick', () => {
        generic.remove()
        })
    }
    
    //  ITEMS / OBJECTS
    newImage('assets/green-character.gif', 100, 100)
    newImage('assets/tree.png', 200, 300)
    newImage('assets/pillar.png', 350, 100)
    newImage('assets/pine-tree.png', 450, 200)
    newImage('assets/crate.png', 150, 200)
    newImage('assets/well.png', 500, 425)
    
    newItem('assets/sword.png', 500, 405)
    newItem('assets/shield.png', 165, 185)
    newItem('assets/staff.png', 600, 100)