from flask_jwt_extended import create_access_token
from flask import request, jsonify
from api.models.users_models import User, db

def login():
    user_request = request.json
    email = user_request.get('email')
    password = user_request.get('password')

    user = User.query.filter_by(email=email, password=password).first()

    if user is None:
        return jsonify({"msg": "Bad username or password"}), 401
    
    access_token = create_access_token(identity=user.serialize())
    return jsonify({ "token": access_token, "user_id": user.serialize() })