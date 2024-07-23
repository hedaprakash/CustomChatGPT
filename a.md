
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


cd ../frontend

# Ensure dependencies are installed
sudo apt update
sudo apt upgrade -y
sudo apt install nodejs npm -y

# pip install npm 

sudo apt update
sudo apt install -y nodejs npm
sudo npm cache clean -f
sudo npm install -g n
sudo n stable


# Start the development server
npm run dev

Go to http://127.0.0.1:3000 and enjoy!




mkdir -p ~/bkp/CustomChatGPT

cp ~/proj/CustomChatGPT/backend/.env ~/bkp/CustomChatGPT/
cp ~/proj/CustomChatGPT/frontend/.env.local ~/bkp/CustomChatGPT/
cp ~/proj/CustomChatGPT/a.md ~/bkp/CustomChatGPT/

cp ~/bkp/CustomChatGPT/.env ~/proj/CustomChatGPT/backend/
cp ~/bkp/CustomChatGPT/.env.local ~/proj/CustomChatGPT/frontend/ 
cp ~/bkp/CustomChatGPT/a.md  ~/proj/CustomChatGPT/


