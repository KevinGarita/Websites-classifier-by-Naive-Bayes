

def naiveBayes(totalW, totaltype1W, totaltype2W, totaltype3W, type1W, type2W, type3W):
    previousProb1 = totaltype1W/totalW
    previousProb2 = totaltype2W/totalW
    previousProb3 = totaltype3W/totalW

    probType1 = type1W/totaltype1W
    probType2 = type2W/totaltype2W
    probType3 = type3W/totaltype3W

    totalProb1 = previousProb1*probType1
    totalProb2 = previousProb2*probType2
    totalProb3 = previousProb3*probType3

    return [totalProb1,totalProb2,totalProb3]

print(naiveBayes(200,50,40,110,50,40,110))