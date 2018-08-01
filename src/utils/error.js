export const throwError = (statusCode, message, data) => {
    const error = new Error();
    error.statusCode = statusCode;
    error.message = message;
    error.data = data;

    return error;
};
