
git clone https://github.com/gdroguski/CustomChatGPT.git
cd CustomChatGPT
deactivate
pip install django djangorestframework psycopg2-binary channels
pip install -r backend/dependencies.txt


# Follow the rest of the setup instructions
cd backend
python manage.py migrate
python manage.py makemigrations
python manage.py createsuperuser
python manage.py create_roles
python manage.py collectstatic
python manage.py runserver 9000


cd ~/proj/CustomChatGPT/frontend

# Ensure dependencies are installed
sudo apt update
sudo apt upgrade -y
sudo apt install nodejs npm -y

# pip install npm 

sudo apt update
sudo apt install -y nodejs npm
sudo npm cache clean -f
sudo npm install -g n
sudo npm install -g next
sudo n stable

node -v
npm -v

# Start the development server
cd ~/proj/CustomChatGPT/frontend
npm run dev

# Reinstall Node Modules:
Sometimes, above command fail then the installation of node modules can fail or become corrupted. You can try reinstalling them:
cd /home/hvadmin/proj/CustomChatGPT/frontend
rm -rf node_modules
npm install

npm run dev

Go to http://127.0.0.1:3000 and enjoy!




mkdir -p ~/bkp/CustomChatGPT

cp ~/proj/CustomChatGPT/backend/.env ~/bkp/CustomChatGPT/
cp ~/proj/CustomChatGPT/frontend/.env.local ~/bkp/CustomChatGPT/
cp ~/proj/CustomChatGPT/a.md ~/bkp/CustomChatGPT/

cp ~/bkp/CustomChatGPT/.env ~/proj/CustomChatGPT/backend/
cp ~/bkp/CustomChatGPT/.env.local ~/proj/CustomChatGPT/frontend/ 
cp ~/bkp/CustomChatGPT/a.md  ~/proj/CustomChatGPT/






which node
which npm
echo $PATH
node --version
npm --version

cat /home/hvadmin/proj/CustomChatGPT/capture_env.js
cat /home/hvadmin/proj/CustomChatGPT/manual_env.txt
cat /home/hvadmin/proj/CustomChatGPT/vscode_env.txt

tree /home/hvadmin/proj/CustomChatGPT


python manage.py makemigrations
python manage.py migrate



# validate sur existance
python manage.py shell
Then run:
python
from authentication.models import CustomUser
user = CustomUser.objects.get(email='prakash@starinnovative.com')
print(user.is_active)


# create new user
curl -X POST http://127.0.0.1:9000/auth/register/ \
-H "Content-Type: application/json" \
-d '{"email": "abc@abcde.com", "password": "Advent1001#"}'

curl -X POST http://127.0.0.1:9000/auth/login/ \
-H "Content-Type: application/json" \
-d '{"email": "abc@abcde.com", "password": "Advent1001#"}'

curl -X POST http://127.0.0.1:9000/auth/login/ \
-H "Content-Type: application/json" \
-d '{"email": "prakash@starinnovative.com", "password": "qqqqqq1!"}'


http://127.0.0.1:9000/auth/register/


http://127.0.0.1:9000/auth/login/
{"email": "prakash@starinnovative.com", "password": "qqqqqq1!"}
