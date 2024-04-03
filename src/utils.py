import pandas as pd

def float2int(x):
    if x != 'nan':
        return int(x)
    else:
        return x