import arcjet, { detectBot, shield, tokenBucket } from "@arcjet/node";

// Configure Arcjet with security rules.
const aj = arcjet({
    key: process.env.ARCJET_KEY,
    characteristics: ['ip.src'],
    rules: [
        shield({
            mode: 'LIVE'
        }), // Protects against common attacks
        detectBot({
            mode: 'LIVE',
            allow: [
                'CATEGORY:SEARCH_ENGINE',
                'POSTMAN'
            ]
        }), // Bot detection
        tokenBucket({
            mode: 'LIVE',
            refillRate: 5,
            interval: 10,
            capacity: 3
        }), // Rate limiting
    ]
});

export default aj;