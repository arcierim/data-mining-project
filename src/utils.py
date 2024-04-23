from time import time
import pandas as pd
from statsmodels.stats.outliers_influence import variance_inflation_factor
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score, roc_auc_score


def VIF_calculation(X):
    """Calculate the Variance Inflation Factor (VIF) for each variable in the dataset"""
    VIF = pd.DataFrame()
    VIF["variable"] = X.columns
    VIF["VIF"] = [variance_inflation_factor(X.values, i) for i in range(X.shape[1])]
    VIF = VIF.sort_values('VIF', ascending=False).reset_index(drop = True)
    return(VIF)


def delete_multicollinearity(df, target_name, VIF_threshold):
    """Delete multicollinearity from the dataset"""
    X = df.drop(target_name, axis=1)
    start = time()
    VIF_mat = VIF_calculation(X)
    end = time()
    n_VIF = VIF_mat["VIF"][0]
    if (n_VIF <= VIF_threshold):
        print("There is no multicollinearity!")
    else:
        while (n_VIF > VIF_threshold):
            print(f'Dropped column {VIF_mat["variable"][0]} with VIF: {round(VIF_mat["VIF"][0], 1)} ({int(end - start)}s)')
            X = X.drop(VIF_mat["variable"][0], axis=1)
            start = time()
            VIF_mat = VIF_calculation(X)
            end = time()
            n_VIF = VIF_mat["VIF"][0]
    return X

def model_evaluation_clf(model, X_test, y_test):
    y_pred = model.predict(X_test)
    accuracy = round(accuracy_score(y_test, y_pred), 3)
    precision = round(precision_score(y_test, y_pred), 3)
    recall = round(recall_score(y_test, y_pred), 3)
    f1 = round(f1_score(y_test, y_pred), 3)
    roc_auc = round(roc_auc_score(y_test, y_pred), 3)
    return {'accuracy': accuracy, 'precision': precision, 'recall': recall, 'f1': f1, 'roc_auc': roc_auc}