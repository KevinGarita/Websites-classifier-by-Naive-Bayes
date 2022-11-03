from threading import Thread
from words_lists import *
from naive_bayes import *
import pandas as pd
from functions import *

datos = pd.read_csv('../assets/Links.csv', encoding = "ISO-8859-1")
links = datos['google1_correct_website']
listAnalyzedPages = []
listConnectionFail = []

def process(link):
    response = link_connection(link)
    if response == False:
        return False
    textParse = multithreadingScraping(response)
    results = multithreadingSearchWords(textParse)
    textWords = totalWords(textParse)
    classification, percentageNews, percentageCommercial, percentageEntertainment = naiveBayes(textWords, results)
    pageAnalysis = {
        'link': link,
        'classification': classification,
        'percentageNews': percentageNews,
        'percentageCommercial': percentageCommercial,
        'percentageEntertainment': percentageEntertainment,
        'totalWords': textWords,
        'details': results
    }
    return pageAnalysis

def listLinks(links):
    for link in links:
        linkProcess = process(link)
        if linkProcess == False:
            listConnectionFail.append(link)
            continue
        else: 
            pageAnalysis = linkProcess
            print(pageAnalysis['classification'])
            listAnalyzedPages.append(pageAnalysis)


def main(amount):
    links01, links02 = split_list(list(links[0:int(amount)]))
    links1, links2 = split_list(links01)
    links3, links4 = split_list(links02)


    #Configuracion de los hilos
    thread1 = Thread(target=listLinks, args=(links1,))
    thread2 = Thread(target=listLinks, args=(links2,))
    thread3 = Thread(target=listLinks, args=(links3,))
    thread4 = Thread(target=listLinks, args=(links4,))


    #Inicializacion de los hilos.
    thread1.start()
    thread2.start()
    thread3.start()
    thread4.start()


    #Esperar a que los hilos finalicen sus tareas
    thread1.join()
    thread2.join()
    thread3.join()
    thread4.join()

    return

