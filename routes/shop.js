const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', shopController.getIndex);

// router.get('/products', shopController.getpollUnits);

router.get('/polls', shopController.getPollUnits);

router.get('/polls/:polling_unitId', shopController.getResults);

router.get('/lga', shopController.getCart);

router.get('lga/:lga_id', shopController.getLgaResults);

// router.post('/lga-delete-item', shopController.postCartDeleteProduct);

// router.post('/create-order', shopController.postOrder);

// router.get('/orders', shopController.getOrders);

module.exports = router;
