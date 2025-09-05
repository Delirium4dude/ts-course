
interface IPayment {
    sum: number
    from: number
    to: number
};

enum PaymentStatuses {
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

interface IResponseSucces {
    status: PaymentStatuses.Success;
    data: IDataSuccess;
}

interface IResponseFailed {
    status: PaymentStatuses.Failed;
    data: IDataFailed;
}

// тайпгард для проверки статуса платежа
type response = IResponseFailed | IResponseSucces;

function isResponseSuccess(response: response): response is IResponseSucces {
  return response.status === PaymentStatuses.Success
}

function checkResponseStatus(res: response): number {
  if (isResponseSuccess(res)) 
    return res.data.databaseId;

  throw new Error(res.data.errorMessage);
}
