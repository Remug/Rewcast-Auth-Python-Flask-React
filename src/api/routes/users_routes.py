from flask import request, Blueprint
from api.controllers.users_controllers import create_user, get_users, get_user_by_id, delete_user_by_id, update_user_by_id
from flask_jwt_extended import jwt_required

users = Blueprint('users', __name__)

@users.route("/", methods=["GET"])
@jwt_required()
def users_general():   
    return get_users()


@users.route("/<int:id>", methods=["GET", "DELETE", "PATCH"])
@jwt_required()
def user_detail(id):
    if request.method == "GET":        
        return get_user_by_id(id)
    if request.method == "DELETE":        
        return delete_user_by_id(id)
    if request.method == "PATCH":
        return update_user_by_id(id)