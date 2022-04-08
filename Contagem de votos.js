let votosTotal,votos,votosX,votosY,votosBranco,votosNulo,pcX,pcY,pcBranco,pcNulo

votosTotal = 15000

votosX = Number(prompt(`Votos restantes: ${votosTotal}\nDigite quantas pessoas votaram no candidato X`))
votosTotal = votosTotal - votosX
votosY = Number(prompt(`Votos restantes: ${votosTotal}\nDigite quantas pessoas votaram no candidato Y`))
votosTotal = votosTotal - votosY
votosBranco = Number(prompt(`Votos restantes: ${votosTotal}\nDigite quantas pessoas votaram branco`))
votosTotal = votosTotal - votosBranco
votosNulo = Number(prompt(`Votos restantes: ${votosTotal}\nDigite quantas pessoas votaram nulo`))

pcX = ((votosX/15000)*100).toFixed(2)
pcY = ((votosY/15000)*100).toFixed(2)
pcBranco = ((votosBranco/15000)*100).toFixed(2)
pcNulo = ((votosNulo/15000)*100).toFixed(2)

alert(`Candidato X: ${pcX}%\nCandidato Y: ${pcY}%\nVoto em branco: ${pcBranco}%\nVotos nulos: ${pcNulo}%`)