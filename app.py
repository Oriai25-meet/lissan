from flask import Flask, render_template, request, redirect, url_for
from flask import session as login_session 
import pyrebase




firebaseConfig = {
  'apiKey': "AIzaSyCSYeU-rk_kGulpodoajHKTSRuza1ziwks",
  'authDomain': "lissan-829b7.firebaseapp.com",
  'projectId': "lissan-829b7",
  'storageBucket': "lissan-829b7.appspot.com",
  'messagingSenderId': "623855637333",
  'appId': "1:623855637333:web:a4360cb6e43f82038655dc",
  'measurementId': "G-MH7W235EQ6",
  "databaseURL":"https://lissan-829b7-default-rtdb.europe-west1.firebasedatabase.app/"}


app = Flask(__name__,template_folder="tamplates",static_folder = "static")
app.config['SECRET_KEY'] = 'super-secret-key'

firebase = pyrebase.initialize_app(firebaseConfig)
auth = firebase.auth()
db =firebase.database()










if __name__ == '__main__':
    app.run(debug=True)
