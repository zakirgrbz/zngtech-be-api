export default function errorHandler(err, req, res, next) {
    res.status(err.status || 500)
        .json({ status: err.status, message: err.message || "Internal server error" });
}