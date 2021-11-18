const pollResults = require('../models/announced_pu_results');
const Models = require('../models/init-models');
const lga = require('../models/lga');
const pollingUnit = require('../models/polling_unit');


exports.getPollUnits = (req, res, next) => {
  pollingUnit.findAll()
    .then(pollUnits => {
      res.render('shop/product-list', {
        polls: pollUnits,
        pageTitle: 'All Polls',
        path: '/polls'
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getIndex = (req, res, next) => {
  pollResults.findAll()
    .then(pollUnits => {
      res.render('shop/index', {
        pollUnits: pollUnits,
        pageTitle: 'All Polling Units',
        path: '/'
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getResults = (req, res, next) => {
  const pollId = req.params.polling_unitId;
    pollResults.findAll({
      where: {
        polling_unit_uniqueid: pollId,
      },
    })
    .then(pollUnits => {
      res.render('shop/index', {
        pollUnits: pollUnits,
        pageTitle: 'Poll Results',
        path: '/polls'
      });
    })
    .catch(err => {
      console.log(err);
    });
};


exports.getCart = (req, res, next) => {
  lga.findAll()
  .then(pollUnits => {
    res.render('shop/cart', {
      path: '/lga',
      pageTitle: 'Select LGA',
      pollUnits: pollUnits
    });
  })
  .catch(err => console.log(err));
};

exports.getLgaResults = (req, res, next) => {
  const lgaId = req.params.lga_id;
    pollingUnit.findAll({
      where: {
        lga_id: lgaId,
      },
    })
    .then(pollUnits => {
      res.render('shop/lga-results', {
        pollUnits: pollUnits,
        pageTitle: 'LGA Results',
        path: '/lga'
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.postCartDeleteProduct = (req, res, next) => {
  const pollId = req.body.polling_unitId;
  req.user
    .getCart()
    .then(cart => {
      return cart.getpollUnits({ where: { id: pollId } });
    })
    .then(pollUnits => {
      const product = pollUnits[0];
      return product.cartItem.destroy();
    })
    .then(result => {
      res.redirect('/lga');
    })
    .catch(err => console.log(err));
};

exports.postOrder = (req, res, next) => {
  let fetchedCart;
  req.user
    .getCart()
    .then(cart => {
      fetchedCart = cart;
      return cart.getpollUnits();
    })
    .then(pollUnits => {
      return req.user
        .createOrder()
        .then(order => {
          return order.addpollUnits(
            pollUnits.map(product => {
              product.orderItem = { quantity: product.cartItem.quantity };
              return product;
            })
          );
        })
        .catch(err => console.log(err));
    })
    .then(result => {
      return fetchedCart.setpollUnits(null);
    })
    .then(result => {
      res.redirect('/orders');
    })
    .catch(err => console.log(err));
};

exports.getOrders = (req, res, next) => {
  req.user
    .getOrders({include: ['pollUnits']})
    .then(orders => {
      res.render('shop/orders', {
        path: '/orders',
        pageTitle: 'Your Orders',
        orders: orders
      });
    })
    .catch(err => console.log(err));
};
