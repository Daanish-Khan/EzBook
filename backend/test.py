import csv
import random
endings = ["Street","Avenue","Place","Way", "Boulevard"]

def getStreetName():
    streetnames=[]
    with open ('Street_Names.csv') as csv_file:
        for row in csv_file:
            streetnames.append(row.split()[0])
        name = str(random.choice(streetnames)).title()
        return name.replace(',',"") + " "+str(random.choice(endings))

def getPhone():
    return "1-800-"+str(random.randint(100,1000))+"-"+str(random.randint(1000,10000))

def getHotel(i): 
    address = str(random.randint(1,321))+" "+ getStreetName()
    return address
    #*chainName = ''
    #city = getCity()
   # k = 0
   # if i < 8: 
    #    chainName = "Best Western"
     #   k = 0
    #elif i < 17: 
    #    chainName = "Value Motels"
    #    k = 1
    #elif i < 25: 
     #   chainName = "Fairmont Hotels"
     #   k = 2
    #elif i < 33: 
    #    chainName = "Bizarre Accommodations"
     #   k=3
    #else: 
    #    chainName = "Horrible Value Hotels"
    #    k=4

    #return str("('"+address+"', '"+ chainName+ "', '" +city[0]+ "', '"+ city[1] +"', " +str(random.randint(1,5))+", "+ str(random.randint(4,10))+", '" +getPhone()+"'),")

def getCity():
    with open ('cities.csv') as file:
        cities = list(csv.reader(file, delimiter=','))
        index = random.choice(range(0,len(cities)))
        return cities[index]
    
file1 = open('addresses.txt', 'w')
for i in range(41): 
    file1.write(getHotel(i)+"\n")