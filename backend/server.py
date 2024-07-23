import uvicorn
import os
from dotenv import load_dotenv
load_dotenv()

if __name__ == "__main__":
    BACKEND_HOST = os.getenv("BACKEND_HOST", "127.0.0.1")
    BACKEND_PORT = int(os.getenv("BACKEND_PORT", 9000))  # Default to 9000 if not set

    print("Django secret key:", os.environ.get("DJANGO_SECRET_KEY"))
    print("Frontend URL:", os.environ.get("FRONTEND_URL"))

    uvicorn.run("backend.asgi:application", host=BACKEND_HOST, port=BACKEND_PORT, log_level="info", reload=True)

