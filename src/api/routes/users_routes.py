from flask import request, Blueprint
from api.controllers.users_controllers import create_user, get_users, get_user_by_id, delete_user_by_id, update_user_by_id

users = Blueprint('users', __name__)

@users.route("/", methods=["GET"])
def users_general():   
    return get_users()


@users.route("/<int:id>", methods=["GET", "DELETE", "PATCH"])
def user_detail(id):
    if request.method == "GET":        
        return get_user_by_id(id)
    if request.method == "DELETE":        
        return delete_user_by_id(id)
    if request.method == "PATCH":
        return update_user_by_id(id)