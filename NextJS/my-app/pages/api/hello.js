import authMiddleware from "../../middlewares/authMiddleware";

export default authMiddleware(function handler(req, res) {
    res.status(200).json({ message: 'Hello, Next.js API!' });
});
