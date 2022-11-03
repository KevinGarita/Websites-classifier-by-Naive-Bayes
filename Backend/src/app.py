# Create by Kevin Garita.
from flask import Flask, request, jsonify, Response
from flask_cors import CORS
import os
from main_process import *

##Initialize server
app = Flask(__name__, static_url_path='')
CORS(app)
port = int(os.getenv('PORT', 8080))


@app.route('/list-links', methods=['GET'])
def getListLinks():
    
    main(100)   #Trabaja sobre los links del CSV, como parametro se envia la cantidad que se quieran trabajar

    response = jsonify({
        'listAnalyzedPages': listAnalyzedPages,
        'listConnectionFail': listConnectionFail
    })
    return response

@app.route('/link', methods=['POST'])
def processLink():
    print(request.json)
    pageAnalysis = process(request.json['link'])
    return {'message': 'received', 'infoLink': pageAnalysis}


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=port, debug=True)


