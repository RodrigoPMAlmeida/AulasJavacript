let vel,distancia,tempo,hora

distancia = Number(prompt("Qual a distância da trilha em kilometros?"))
tempo = Number(prompt("Quanto tempo demorou para percorrer toda a trilha em minutos?"))
hora= tempo/60
vel = (distancia/hora).toFixed(2)

alert(`Distancia: ${distancia} kilometros\nTempo: ${hora} horas\nVelocidade média: ${vel}km/h`)