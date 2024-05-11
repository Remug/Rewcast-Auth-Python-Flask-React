from flask import request, Blueprint
from api.controllers.users_controllers import create_user
from api.controllers.auth_controllers import login

auth = Blueprint('auth', __name__)

@auth.route("/signup", methods=["POST"])
def signup():
    return create_user()

@auth.route("/login", methods=["POST"])
def login_route():
    return login()

#ruta para crear usuarios y logarse en la base de datos en el thunderclient api/auth/signup(logim)