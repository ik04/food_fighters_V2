from django.shortcuts import render, HttpResponse
import pandas as pd
import random
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework import status
from pathlib import Path



@api_view(['GET','POST'])
def index(request):
    global ingcon
    global discon
    if request.method =="GET":
        return Response("test")
    if request.method =="POST":
        ingiq = int(request.data.get("ingredient"))
        dis = int(request.data.get("disease"))
        df = pd.read_csv("main/Dataset/dummydataset.csv")
        if ingiq == 1:
            ingiq = ingiq+1
        if dis == 1:
            discon = "Fat < 50 and Carbs < 57"
        elif dis == 2:
            discon = "Fat < 50 and Carbs < 57"
        elif dis == 3:
            discon = "Fat < 50"
        elif dis == 4:
            discon = "Protein > 50"
        elif dis == 5:
            discon = "Carbs < 57 and Protein > 50"
        elif dis == 6:
            discon = "Protein > 50"
    #checking for ingredients in question
    #conditions
        if ingiq == 2:
            ingcon = "Carbs < 59"
        if ingiq == 3:
            ingcon = "Fat > 54"
        if ingiq == 4:
            ingcon = "Carbs > 59"
        if ingiq == 5:
            ingcon = "Carbs > 59"
        if ingiq == 6:
            ingcon = "Protein > 54"

        condition = str(ingcon + " and " + discon)

        set = df.query(condition)
        l = list(set["Recipe_name"])
        if len(l) == 0:
            return Response("no, not recomended")
        
        ans = l[random.randint(0, len(l))]
        return JsonResponse({"Recipe":ans})
        # return JsonResponse({"ingredient":ingiq,"disease":dis})
        


# @api_view(['GET','POST'])
# def main(request):
#     if request.method == "GET":
#          return Response("Welcome To The FoodFighters Api")

#     if request.method == "POST":
        
     
   