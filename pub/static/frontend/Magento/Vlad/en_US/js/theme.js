/**
 * Copyright © 2016 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
define([
    'jquery',
    'mage/smart-keyboard-handler',
    'mage/mage',
    'mage/ie-class-fixer',
    'domReady!'
], function ($, keyboardHandler) {
    'use strict';

    if ($('body').hasClass('checkout-cart-index')) {
        if ($('#co-shipping-method-form .fieldset.rates').length > 0 && $('#co-shipping-method-form .fieldset.rates :checked').length === 0) {
            $('#block-shipping').on('collapsiblecreate', function () {
                $('#block-shipping').collapsible('forceActivate');
            });
        }
    }
     $(".link-ulu").click(function (e) {
         e.preventDefault();
        var parent = $(this).parent();
        var boxOpened = $(".box-content");
        var box = parent.children(".box-content");
        if (box.hasClass("opened")) {            
            boxOpened.removeClass("opened");
        } else {
            boxOpened.removeClass("opened");
            box.addClass("opened");
        }
    }); 
    $('.cart-summary').mage('sticky', {
        container: '#maincontent'
    });

    $('.panel.header > .header.links').clone().appendTo('#store\\.links');

    keyboardHandler.apply();
});
