# ASGI server using starlette & uvicorn
from starlette.applications import Starlette
from starlette.responses import FileResponse
from starlette.middleware import Middleware
from starlette.middleware.gzip import GZipMiddleware
from starlette.staticfiles import StaticFiles
from os import path
from uvicorn import run as serve_app


CUR_DIR = path.realpath(path.dirname(__file__))


app = Starlette(debug=True, middleware=[Middleware(GZipMiddleware)])

app.mount("/static", StaticFiles(directory="static", html=True), name="static")


@app.route("/favicon.ico", methods=["GET"])
async def favicon(request):
    return FileResponse(
        path="favicon.ico",
        headers={"Content-Type": "image/x-icon"},
        media_type="image/x-icon"
    )


@app.route("/", methods=["GET"])
async def homepage(request):
    return FileResponse(
        path.join(CUR_DIR, "index.html"),
        media_type="text/html",
        headers={"Content-Type": "text/html;charset=UTF-8"},
    )


if __name__ == "__main__":
    serve_app(app, host="0.0.0.0", port=8000)
