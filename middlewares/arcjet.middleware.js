import aj from "../config/arcjet.js";

// Global Arcjet middleware applied to every incoming request.
export const arcjetMiddleware = async (req, res, next) => {
    console.log("arcjetMiddleware called");
    try {
        const decision = await aj.protect(req, { requested: 1 });

        if (decision.isDenied()) {

            if (decision.reason.isRateLimit()) {
                return res.status(429).json({ error: 'Too Many Requests' });
            }

            if (decision.reason.isBot()) {
                return res.status(403).json({ error: 'Forbidden: Bot detected' });
            }

            return res.status(403).json({ error: 'Forbidden' });
        }

        next();
    } catch (error) {
        console.error('Arcjet middleware error:', error);
        next();
    }
};