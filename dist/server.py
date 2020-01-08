# ASGI server using starlette & uvicorn
from starlette.applications import Starlette
from starlette.responses import FileResponse
from starlette.middleware import Middleware
from starlette.middleware.gzip import GZipMiddleware
from starlette.staticfiles import StaticFiles
from os import path
from uvicorn import run as serve_app


CUR_DIR = path.realpath(path.dirname(__file__))
JS_FILES = path.join(CUR_DIR, "js")
CSS_FILES = path.join(CUR_DIR, "css")
MEDIA_TYPE_MAP = {
    "css": "text/css",
    "js": "application/javascript",
    "html": "text/html",
    "jpg": "image/jpeg",
    "jpeg": "image/jpeg",
    "png": "image/png",
    "gif": "image/gif",
    "jpg": "image/jpeg",
    "pdf": "application/pdf",
    "xls": "application/vnd.ms-excel",
    "gz": "application/gzip",
    "json": "application/json",
    "xml": "application/xml",
    "zip": "application/zip",
    "docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "xlsx": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "zip": "application/zip",
    "heic": "image/heic",
    "heif": "image/heif",
    "ttf": "font/ttf",
    "woff": "font/woff",
    "woff2": "font/woff2",
    "csv": "text/csv",
    "md": "text/markdown",
    "ico": "image/x-icon",
    "": "text/plain",
}


app = Starlette(debug=True, middleware=[Middleware(GZipMiddleware)])
app.mount("/static", StaticFiles(directory="static", html=True), name="static")


@app.route("/favicon.ico", methods=["GET"])
async def favicon(request):
    return FileResponse(
        path="favicon.ico",
        headers={"Content-Type": MEDIA_TYPE_MAP.get("ico")},
        media_type=MEDIA_TYPE_MAP.get("ico")
    )


@app.route("/", methods=["GET"])
async def homepage(request):
    return FileResponse(
        path.join(CUR_DIR, "index.html"),
        media_type=MEDIA_TYPE_MAP.get("html"),
        headers={"Content-Type": f"{MEDIA_TYPE_MAP.get('html')};charset=UTF-8"},
    )


if __name__ == "__main__":
    serve_app(app, host="0.0.0.0", port=8000)
