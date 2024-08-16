from flask import Flask, render_template, request, redirect, url_for
import requests

app = Flask(__name__)

API_URL = 'http://localhost:5000/api/example'

@app.route('/')
def index():
    response = requests.get(API_URL)
    examples = response.json()
    return render_template('index.html', examples=examples)

@app.route('/add', methods=['POST'])
def add_example():
    name = request.form['name']
    description = request.form['description']
    data = {'name': name, 'description': description}
    requests.post(API_URL, json=data)
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)
