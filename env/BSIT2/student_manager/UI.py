from tkinter import *
import tkinter as ttk
import mysql.connector

class MySQL:
    connection = mysql.connector.connect(
        host = "AC BSIT 2",
        user = "aspiras",
        password = "rca14324",
        database = "dbBSIT2"
    )
    cursor = connection.cursor()

class Seed:
    def __init__(root):
        root.leaf = Tk()
        root.config()
        root.Fields()
        
    def config(root):
        root.leaf.title("BSIT 2 Tax Manager")
        root.leaf.geometry("1000x700")
    
    def Fields(root):
        
        pass
    
    def run(root):
        root.leaf.mainloop()
        
if "__main__" == __name__:
    App = Seed()
    App.run()