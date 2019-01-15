from flask import Flask, render_template, jsonify
from flask_cors import CORS
from flask_script import Manager, Shell
from random import randint


app = Flask(__name__, static_folder = "./dist/static", template_folder = "./dist")
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})
manager = Manager(app)

@app.route('/')
def index():
    return render_template("index.html")


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return render_template("index.html")


@app.route('/api/random')
def random_number():
    number = randint(1, 100)
    print(number)
    response = {
        'randomNumber': number
    }
    return jsonify(response)


def make_shell_context():
    return dict(app=app, db=db, User=User, Role=Role)


manager.add_command("shell", Shell(make_context=make_shell_context))


if __name__ == '__main__':
    manager.run()  # command line option for --host=0.0.0.0 --port=5000
