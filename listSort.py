import requests 
import random
response = requests.get ("https://mlh-events.now.sh/na-2019")
#print(response.json())

#Now get the name and the date of the hackathon in a list 
list_res=response.json()
name=[]   #List of Hackathons name
date=[]   #List of Hackathons date
for i in range(0,len(list_res)):
    dict=list_res[i]
    val_list=dict.values()
    val_list=list(val_list)
    name.append(val_list[0])
    date.append(val_list[2])

#Sorting Name
random.shuffle(name)
print(name)
sorted_name=name.sort()
print(sorted_name)





