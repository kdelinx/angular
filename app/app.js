angular.module('checkout', [
    'ngResource',
    'ngAnimate',
    'ngSanitize',
    'ngCookies',
    'angularMoment',
    '720kb.datepicker',
    'ui.mask',

    'checkout.configs',
    'checkout.routes',

    'noUi.core.utils',
    'noUi.dataAccess.order.getOrderInfo',
    'noUi.dataAccess.order.putOrderField',
    'noUi.dataAccess.order.deleteOrderItem',
    'noUi.dataAccess.order.getDeliveryIntervals',
    'noUi.common.modal',

    'noUi.dataAccess.user.getUser',
    'noUi.dataAccess.user.login',
    'noUi.dataAccess.user.getAddressBook',

    'ui.components.core.wrapper',
    'ui.components.core.loadingContent',

    'ui.components.common.autofocus',
    'ui.components.common.sumOnly',
    'ui.components.common.confirm',
    'ui.components.common.collapse.arrow',
    'ui.components.common.collapse.item',
    'ui.components.common.collapse.list',
    
    
    'ui.components.modal.login',

    'ui.components.order.orderItem',
    'ui.components.order.orderList',
    'ui.components.order.totalBlock',
    'ui.components.order.services',
    'ui.components.order.recommendItem',
    'ui.components.order.recommendList',

    'ui.components.payment.methodItem',

    'ui.views.options',
    'ui.views.delivery',
    'ui.views.payment',
    'ui.views.order'
]);