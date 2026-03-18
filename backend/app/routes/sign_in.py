from flask import Blueprint, jsonify

sign_in_bp = Blueprint('sign_in', __name__)

@sign_in_bp.route('/api/backoffice-portal/sign_in', methods=['POST'])
def test_api():
    return
@sign_in_bp.route('/api/fieldops-portal/sign_in', methods=['POST'])
def test_api():
    return