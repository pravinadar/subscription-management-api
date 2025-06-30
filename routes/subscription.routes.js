import express from 'express';
import authMiddleware from '../middlewares/auth.middleware.js';
import { 
    addSubscription, 
    deleteSubscription, 
    getSubscriptionById, 
    getSubscriptions, 
    updateSubscription 
} from '../controllers/subscription.controller.js';

const router = express.Router();

// All subscription routes require authentication.
router.use(authMiddleware);

router.post('/', addSubscription);
router.get('/', getSubscriptions);
router.get('/:id', getSubscriptionById);
router.put('/:id', updateSubscription);
router.delete('/:id', deleteSubscription);


export default router;