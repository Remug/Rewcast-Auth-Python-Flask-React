"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models.users_models import db, User
from api.utils import generate_sitemap, APIException
from api.routes.users_routes import users
from api.routes.auth_routes import auth

api = Blueprint('api', __name__)

api.register_blueprint(users, url_prefix='/users')
api.register_blueprint(auth, url_prefix='/auth')