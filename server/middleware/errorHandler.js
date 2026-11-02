import { sendError } from '../utils/response.js';

export const errorHandler = (err, req, res, next) => {
  console.error(`[Error] ${err.stack || err.message}`);

  const statusCode = err.statusCode || (res.statusCode === 200 ? 500 : res.statusCode);
  const message = err.message || 'Internal Server Error';

  return sendError(
    res,
    statusCode,
    message,
    process.env.NODE_ENV === 'development' ? err.stack : undefined
  );
};
