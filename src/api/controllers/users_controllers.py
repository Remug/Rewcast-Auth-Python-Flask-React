from flask import request, jsonify
from api.models.users_models import User, db


#ruta para crear usuarios y logarse en la base de datos en el thunderclient api/auth/signup(logim)
def create_user():
    user_request = request.json
    user = User(
        password=user_request.get("password"),
        email=user_request.get("email"),
        is_active=True
    )
    db.session.add(user)
    db.session.commit()
    return jsonify({ 'msg': 'Se ha creado el usuario'})

def get_users():
    query = db.select(User)
    users = db.session.execute(query).scalars()
    users = [user.serialize() for user in users]
    return jsonify(users)

def get_user_by_id(id):
    user = db.get_or_404(User, id)
    return jsonify(user.serialize())

def delete_user_by_id(id):
    user = db.get_or_404(User, id)
    db.session.delete(user)
    db.session.commit()
    return jsonify({'msg': 'Se ha eliminado el usuario'})

def update_user_by_id(id):
    user = db.get_or_404(User, id)
    req = request.json

    user.email = req.get("email", user.email)
    db.session.add(user)
    db.session.commit()
    return jsonify({'msg': 'Se ha editado el usuario'})
