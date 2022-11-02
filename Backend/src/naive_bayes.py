def naiveBayes(totalWords, results):
    classification = ""
    totalNews = 0
    totalCommercial = 0
    totalEntertainment = 0

    for element in results:
        if element['category'] == "News":
            totalNews = totalNews + (element['count'] * element['value'])
        elif element['category'] == "Commercial":
            totalCommercial = totalCommercial + (element['count'] * element['value'])
        elif element['category'] == "Entertainment":
            totalEntertainment = totalEntertainment + (element['count'] * element['value'])

    #Sacar los porcentajes de las diferentes cartegorias
    try:
        percentageNews = (totalNews * 100) / totalWords
        percentageCommercial = (totalCommercial * 100) / totalWords
        percentageEntertainment = (totalEntertainment * 100) / totalWords
    except ZeroDivisionError: 
        percentageNews = 0
        percentageCommercial = 0
        percentageEntertainment = 0
    


    if percentageNews < 1 and percentageCommercial < 1 and percentageEntertainment < 1:
        classification = "Unrated"
    else:
        if percentageNews > percentageCommercial and percentageNews > percentageEntertainment:
            classification = "News"
        elif percentageCommercial > percentageNews and percentageCommercial > percentageEntertainment:
            classification = "Commercial"
        elif percentageEntertainment > percentageNews and percentageEntertainment > percentageCommercial:
            classification = "Entertainment"

    return classification, percentageNews, percentageCommercial, percentageEntertainment