
interface IPayment {
    sum: number
    from: number
    to: number
}

enum PaymentStatus {
    Success = "success",
    Failed = "failed",
}

interface IPaymentRequest extends IPayment { }

interface IDataSuccess extends IPayment {
    databaseId: number;
}

interface IDataFailed {
    errorMessage: string;
    errorCode: number;
}

interface IResponse {
    status: PaymentStatus;
    data: IDataFailed | IDataSuccess;
}

// тайпгард для проверки статуса платежа
type response = IResponseFailed | IResponseSucces;


function isResponseSuccess(response: response): response is IResponseSucces {
  return response.status === PaymentStatus.Success
}

function checkResponseStatus(res: response): number {
  if (isResponseSuccess(res)) 
    return res.data.databaseId;

  throw new Error(res.data.errorMessage);
}

const req:IPaymentRequest = {
    "sum": 10000,
    "from": 2,
    "to": 4
}

const res: IResponse = {
    "status": PaymentStatus.Success,
    "data": {
        "databaseId": 567,
        "sum": 10000,
        "from": 2,
        "to": 4
    }
};

const res2: IResponse = {
    "status": PaymentStatus.Failed,
    "data": {
        "errorMessage": "Недостаточно средств",
        "errorCode": 4
    }
};
