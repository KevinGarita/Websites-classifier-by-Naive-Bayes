from bs4 import BeautifulSoup
from threading import Thread
from wordsLists import *
import pandas as pd
import requests
import queue

def split_list(list):
    half = len(list)//2
    return list[:half], list[half:]

def scrapingPage(link):
    page = requests.get(link)
    htmlSoup = BeautifulSoup(page.text, 'html.parser')
    tagList = ['h1', 'h2', 'h3', 'h4']
    return htmlSoup, tagList

def scrapingTags(queue: queue.Queue, htmlSoup, tagList):
    textParse = ""
    for tag in tagList:
        for element in htmlSoup.find_all(tag):
            textParse = textParse + " " + element.get_text()

    textParse = textParse.lower()  #lo convierte todo en minusculas
    queue.put_nowait(textParse)

def multithreadingScraping(link):
    htmlSoup, tagList = scrapingPage(link)
    tagList1, tagList2 = split_list(tagList)
    queq = queue.Queue()

    """
    scrapingTags(queq, htmlSoup, tagList)
    print(queq.get_nowait())
    """

    #Configuracion de los hilos
    thread1 = Thread(target=scrapingTags, args=(queq, htmlSoup, tagList1))
    thread2 = Thread(target=scrapingTags, args=(queq, htmlSoup, tagList2))

    #Inicializacion de los hilos.
    thread1.start()
    thread2.start()

    #Esperar a que los hilos finalicen sus tareas
    thread1.join()
    thread2.join()
    
    #Obtener los resultados de las funciones
    textParse = queq.get_nowait() + " " + queq.get_nowait()

    return textParse
    

def searchWords(queue: queue.Queue, textParse, category, listWords):
    countWords = []
    for dicc in listWords:
        word = dicc['word'].lower()
        value = dicc['value']
        repetitions = textParse.count(word)
        countWords.append({'word': word, 'value': value, 'count': repetitions, 'category': category})
    queue.put_nowait(countWords)

def multithreadingSearchWords(textParse):
    queq = queue.Queue()

    """
    searchWords(queq, textParse, 'News', News)
    searchWords(queq, textParse, 'Commercial', Commercial)
    searchWords(queq, textParse, 'Entertainment', Entertainment)

    print(queq.get_nowait())
    print(queq.get_nowait())
    print(queq.get_nowait())
    """
    
    #Configuracion de los hilos
    thread1 = Thread(target=searchWords, args=(queq, textParse, 'News', News))
    thread2 = Thread(target=searchWords, args=(queq, textParse, 'Commercial', Commercial))
    thread3 = Thread(target=searchWords, args=(queq, textParse, 'Entertainment', Entertainment))

    #Inicializacion de los hilos.
    thread1.start()
    thread2.start()
    thread3.start()

    #Esperar a que los hilos finalicen sus tareas
    thread1.join()
    thread2.join()
    thread3.join()
    

    #Obtener los resultados de las funciones
    results = queq.get_nowait() + queq.get_nowait() + queq.get_nowait()

    print(results)
    return results
