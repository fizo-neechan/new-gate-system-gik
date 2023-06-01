const express = require('express');
const router = express.Router();
const morgan = require('morgan');

// const productRoutes = require('./routes/products');
const dailyLogRoute = require('./routes/dailylog');
const searchRoute = require('./routes/search');

router.use(morgan('dev'));
router.use('/dailyLog', dailyLogRoute);
router.use('/search', searchRoute);

// Routes which should handle requests
// router.use('/orders', orderRoutes);
router.get('/', (req, res, next) => {
    console.log("here");
    res.status(200).json({
        message: "prouteru"
    });
});

router.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})

router.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});



module.exports = router;