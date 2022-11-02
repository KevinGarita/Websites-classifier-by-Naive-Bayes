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

    response = jsonify({
        'listAnalyzedPages': listAnalyzedPages,
        'listConnectionFail': listConnectionFail
    })
    print(response)
    return response


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=port, debug=True)


