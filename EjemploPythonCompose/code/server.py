'''
Just a basic server that listens on port 8080 and returns a simple message.
'''

from flask import Flask
import os

app = Flask(__name__)

@app.route('/')
def hello_world():
    print('Handling request to root URL /')
    return 'Hello, World 9!'

if __name__ == '__main__':
    port=os.getenv('APP_PORT', 8080)
    app.run(host='0.0.0.0', port=port, debug=True)
    print(f'Server running on port {port}')