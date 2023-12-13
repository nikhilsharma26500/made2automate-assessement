from fastapi import FastAPI

app = FastAPI()


@app.post("/admin")
def add_details(prod_name: str, prod_id: int, prod_desc: str, prod_imgLink: str):
    
    
@app.get("admin/barcode")
def generated_barcode(barcode_value: int):
    return None

# @app.get("/user"):