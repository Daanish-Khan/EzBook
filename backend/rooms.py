import csv
import random

views = ["NULL", "\'Mountain\'", "\'Sea\'"]
amenities = ["NULL","\'TV, Desk\'"]
expandable = ["true","false"]


hotelInfo=['185 Watt Place','267 Margrave Street','17 Harriet Avenue','240 Denslowe Way','266 Badger Way','256 Bepler Way','114 Parkhurst Way','307 Lily Way','293 Girard Avenue','71 Cerritos Place','122 Marcy Boulevard','121 Wheeler Way','244 Modoc Street','253 Wabash Boulevard','56 Circular Boulevard','214 Danton Place','176 Naglee Way','127 Hicks Place','220 Baker Street','293 Pizarro Street','261 Miley Avenue','80 28Th Avenue','160 Harding Place','161 Denslowe Avenue','254 Faith Boulevard','248 Ord Boulevard','122 Bay Place','177 Mirabel Street','84 Aladdin Boulevard','161 Jessie Way','273 Clipper Avenue','314 Burlwood Street','65 Dunnes Boulevard','72 09Th Place','112 Flint Place','18 Muir Way','302 Overlook Boulevard','148 Taylor Avenue','180 Lundys Avenue','192 Crescent Avenue','98 Fernandez Avenue']        
file1 = open('rooms.txt', 'w')
for hotel in hotelInfo:
    for i in range (5):
        file1.write(str("("+str(i+1)+", '"+ hotel+ "', " +str(round(random.uniform(100.00, 600.00), 2))+ ", "+ str(i+1) +", "+random.choice(views) +", "+ random.choice(amenities)+", "+ random.choice(expandable)+"),\n"))