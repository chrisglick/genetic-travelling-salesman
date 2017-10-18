# genetic-travelling-salesman
An exploration if I could apply genetic algorithms to TSP.

From this Python code I wrote during a seminar at work. It worked but I really didn't like a lot of the design/data structure decisions.
____________________________

import random as rand

def generatePopulation(numGenerate, chromosomeLen):
    population = []
    for i in range(0, numGenerate):
        population.append([0,generateRandomPatternList(chromosomeLen)])
    return population
    
def generateRandomPatternList(num_chars):
    result = []
    for i in range(0,num_chars):
        if(rand.random()>0.5):
            result.append(1)
        else:
            result.append(0)
    return result

def fitness(list):
    withScore = []
    for x in list:
        withScore.append([sum(x[1]),x[1]])
    return withScore

def select(list):
    sortedList = sorted(list, reverse=True)
    return sortedList[0:int(len(sortedList)/2)]

def crossover(list):
    crossed = []
    for idx, gene in list:
        sourceGene = gene
        otherGene = list[int((rand.random() * (len(list) - 1)) ) ]
        
        thisCross = crossGene(sourceGene, otherGene)
        crossed.append([gene[0],thisCross[0]])
        crossed.append([otherGene[0],thisCross[1]])
    return crossed
        
    
def crossGene(list1 , list2):
    list1Len = len(list1)
    list2Len = len(list2)
    randOffset = int(rand.random() * list1Len)
    leftList1 = list1[0:randOffset]
    rightList1 = list1[randOffset:list1Len]
    leftList2 = list2[0:randOffset]
    rightList2 = list2[randOffset:list1Len]
    leftList1.extend(rightList2)
    rightList1.extend(leftList2)
    return [leftList1, rightList1]

def genetic(list, gen):
    tested = fitness(list)
    selected = select(tested)
    crossed = crossover(selected)
    print(crossed)
    print('Highest fitness in generation', gen, ': ', selected[0][0])
    if(gen < 200):
        gen += 1
        genetic(crossed, gen)
    
    
def init(numPop):
    genetic(generatePopulation(numPop, 100), 1)
