from bs4 import BeautifulSoup
from threading import Thread
from wordsLists import *
import pandas as pd
import requests
import queue

from functions import *

datos = pd.read_csv('assets/Links.csv', encoding = "ISO-8859-1")
links = datos['google1_correct_website']
print(links[0])

def process(link):
    textParse = multithreadingScraping(link)
    multithreadingSearchWords(textParse)
    return

process(links[0])