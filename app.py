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


app = Flask(__name__,template_folder="templates",static_folder = "static")
app.config['SECRET_KEY'] = 'super-secret-key'

firebase = pyrebase.initialize_app(firebaseConfig)
auth = firebase.auth()
db =firebase.database()





@app.route("/", methods=["GET","POST"])
def signup():
	if request.method =="GET":
		return render_template("signup2.html") 
	else:
		email = request.form['email']
		password = request.form['password']
		login_session['user'] = auth.create_user_with_email_and_password(email, password)
		user_id = login_session['user']['localId']
		db.child('donates').set(0)

		return redirect(url_for('home'))


@app.route("/signin",methods = ["GET","POST"])
def signin():
	if request.method=="POST":
		full_name = request.form['full_name']

		email = request.form['email']
		password = request.form['password']
		login_session['user'] = auth.sign_in_with_email_and_password(email, password)
		return redirect(url_for('home'))
	
	else:
		return render_template("signin2.html")

@app.route('/home',methods = ["GET","POST"])
def home():
	if request.method=="GET":
		return render_template("index.html")



@app.route("/signout", methods=["POST","GET"])
def signout():
	if request.method == "GET":
		return redirect(url_for('signin'))


@app.route('/donate',methods = ["GET","POST"])
def donate():
	if request.method=="GET":
		return render_template("donate.html")
	else:
		donate = request.form['donate']
		login_session['donate'] = donate
		#dis = request.form['dis']
		user = {'full_name':"f", 'donate':donate}
		user_id = login_session['user']['localId']

		db.child("users").child(user_id).set(user)
		
		return redirect(url_for('bar'))

@app .route('/bar')
def bar():
	real_donate = int(db.child('donates').get().val())
	total = real_donate + int(login_session['donate'])
	db.child('donates').set(total)
	bar_donate = db.child('donates').get().val()
	return render_template('bar.html',bar_donate = bar_donate)

if __name__ == '__main__':
    app.run(debug=True)
