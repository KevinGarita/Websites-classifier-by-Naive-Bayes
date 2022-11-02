from flask import Flask
from flask_cors import CORS
import os

##Initialize server
app = Flask(__name__, static_url_path='')
CORS(app)
port = int(os.getenv('PORT', 8080))

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=port, debug=True)
