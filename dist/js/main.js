jQuery(document).ready(function () {

    fixedMeni();

    jQuery(".phone-menu").click(function () {
        jQuery(this).toggleClass("change");
        jQuery('header').toggleClass('active');
        jQuery('.header-items').slideToggle();
    });

    jQuery('.card-btn').click(function () {
        var box = jQuery(this).parent('.accordion-card');
        box.toggleClass('active');
        box.find('.card-box').slideToggle();
        jQuery('.accordion-card').not(box).removeClass('active');
        jQuery('.accordion-card').not(box).find('.card-box').slideUp();
    });

    jQuery('a').click(function () {
        var href = jQuery(this).attr('href');
        if (href == '#trialModal') {
            jQuery('#trialModal').modal('show');
        } else {

        }
    });

    if (jQuery(window).width() < 991) {
        jQuery('.tab-buttons li button').click(function (){
            var targetPlan = jQuery(this).attr('id');
            jQuery('.tab-buttons li button').removeClass('active');
            jQuery(this).addClass('active');
            jQuery('.plan-holder').hide();
            jQuery(".plan-holder[data-plan='" + targetPlan +"']").show();
        });
    }

    jQuery('#trialModal').on('shown.bs.modal', function (e) {
        jQuery('.modal-slider').slick('setPosition');
        jQuery('.wrap-modal-slider').addClass('open');
    })

    jQuery('.video-modal').each(function () {
        var videoSrc = jQuery(this).find('iframe').attr("src");

        jQuery(this).on('show.bs.modal', function () {
            jQuery(this).find('iframe').attr("src", videoSrc + "&amp;autoplay=1");
        });
        jQuery(this).on('hidden.bs.modal', function (e) {
            jQuery(this).find('iframe').attr("src", null);
        });
    });

    jQuery('.card-head').click(function () {
        jQuery(this).parent('.card-block').toggleClass('active');
        jQuery(this).next('.card-main').slideToggle();
    });

    jQuery('#accordion .card').click(function () {
        jQuery('#accordion .card').not(this).removeClass('active');
        jQuery(this).toggleClass('active');
    });

    jQuery('#accordion2 .card').click(function () {
        jQuery('#accordion2 .card').not(this).removeClass('active');
        jQuery(this).toggleClass('active');
    });

    jQuery(".news-container").slice(0, 9).show();
    if (jQuery(".news-item:hidden").length != 0) {
        jQuery("#loadNews").show();
    }
    jQuery("#loadNews").on('click', function (e) {
        e.preventDefault();
        jQuery(".news-container:hidden").slice(0, 9).slideDown();
        if (jQuery(".news-container:hidden").length == 0) {
            jQuery("#loadNews").fadeOut('slow');
        }
    });

    document.querySelectorAll('.post-holder').forEach((postHolder) => {
        const what = postHolder.querySelector('.head').innerText
        const file = postHolder.dataset.file
        const fields = document.querySelectorAll('nf-field')
        if (fields.length > 4) {
            fields[3].querySelector('input').value = file
            fields[4].querySelector('input').value = what
        }
    })

    // Todo remove when fully ported to ninja forms
    jQuery('.post-holder').each(function(){
        var what = jQuery(this).find('.head').text();
        var file = jQuery(this).attr('data-file');
        jQuery(this).find('.thecase').val(what);
        jQuery(this).find('.thefile').val(file);
    });
    
    jQuery('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#trialModal"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = jQuery(this.hash);
                target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    jQuery('html, body').animate({
                        scrollTop: target.offset().top - 95
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = jQuery(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        }
                        ;
                    });
                }
            }
        });
    if (jQuery('.needs-slider').width() > 1) {
        jQuery('.needs-slider').slick({
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: true,
            dots: false,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }
    if (jQuery('.more-slider').width() > 1) {
        jQuery('.more-slider').slick({
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: true,
            dots: false,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }
    //    if (jQuery('.modal-slider').width() > 1) {
    jQuery('.modal-slider').slick({
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    //    }
    if (jQuery('.capabilities-slider').width() > 1) {
        jQuery('.capabilities-slider').slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            mobileFirst: true,
            responsive: [
                {
                    breakpoint: 992,
                    settings: "unslick"
                }
            ]
        });
    }
    if (jQuery('.enterprise-slider').width() > 1) {
        jQuery('.enterprise-slider').slick({
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: true,
            dots: false,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }
    if (jQuery('.benefits-slider').width() > 1) {
        jQuery('.benefits-slider').slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            mobileFirst: true,
            responsive: [
                {
                    breakpoint: 992,
                    settings: "unslick"
                }
            ]
        });
    }
    if (jQuery('.benefits2-slider').width() > 1) {
        jQuery('.benefits2-slider').slick({
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: true,
            dots: false,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }
    if (jQuery('.image-slider').width() > 1) {
        jQuery('.image-slider').slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            fade: true
        });
    }
    if (jQuery('.coll-slider').width() > 1) {
        jQuery('.coll-slider').slick({
            infinite: false,
            fade: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: false
        });
        jQuery('.coll-slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            var current = jQuery(slick.$slides[currentSlide]);
            current.html(current.html());
        });
    }
    if (jQuery('.col-slider').width() > 1) {
        jQuery('.col-slider').slick({
            infinite: false,
            fade: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: false
        });
        jQuery('.col-slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            var current = jQuery(slick.$slides[currentSlide]);
            current.html(current.html());
        });
    }

    
    if (jQuery('.related-slider').width() > 1) {
        jQuery('.related-slider').slick({
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }
    if (jQuery('.testimonial-slider').width() > 1) {
        jQuery('.testimonial-slider').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            arrows: true,
            dots: false,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }

    if (jQuery('.selection').width() > 1) {
        // Iterate over each select element
        jQuery('select').each(function () {

            // Cache the number of options
            var $this = jQuery(this),
                numberOfOptions = jQuery(this).children('option').length;

            // Hides the select element
            $this.addClass('s-hidden');

            // Wrap the select element in a div
            $this.wrap('<div class="select"></div>');

            // Insert a styled div to sit over the top of the hidden select element
            $this.after('<div class="styledSelect"></div>');

            // Cache the styled div
            var $styledSelect = $this.next('div.styledSelect');

            // Show the first select option in the styled div
            $styledSelect.text($this.children('option').eq(0).text());

            // Insert an unordered list after the styled div and also cache the list
            var $list = jQuery('<ul />', {
                'class': 'options'
            }).insertAfter($styledSelect);

            // Insert a list item into the unordered list for each select option
            for (var i = 0; i < numberOfOptions; i++) {
                jQuery('<li />', {
                    text: $this.children('option').eq(i).text(),
                    rel: $this.children('option').eq(i).val()
                }).appendTo($list);
            }

            // Cache the list items
            var $listItems = $list.children('li');

            // Show the unordered list when the styled div is clicked (also hides it if the div is clicked again)
            $styledSelect.click(function (e) {
                e.stopPropagation();
                jQuery('div.styledSelect.active').not(this).removeClass('active').next('ul.options').hide();
                jQuery(this).toggleClass('active').next('ul.options').toggle();
            });

            // Hides the unordered list when a list item is clicked and updates the styled div to show the selected list item
            // Updates the select element to have the value of the equivalent option
            $listItems.click(function (e) {
                e.stopPropagation();
                $styledSelect.text(jQuery(this).text()).removeClass('active');
                $this.val(jQuery(this).attr('rel'));
                $list.hide();
                if (jQuery('.order-form-section').width() > 1) {
                    doCalculation();
                }
                if (jQuery('.ionos-form-section').width() > 1) {
                    doCalculation2();
                }

                /* alert($this.val()); Uncomment this for demonstration! */
            });

            // Hides the unordered list when clicking outside of it
            jQuery(document).click(function () {
                $styledSelect.removeClass('active');
                $list.hide();
            });

        });
    }

    var filter1 = 'all-dev';
    var filter2 = 'all-cert';
    var filter3 = 'all-comp';

    jQuery('#services').val('All services');
    jQuery('#certificates').val('All levels');
    jQuery('#country').val('All');
    jQuery('input[type="checkbox"]').each(function () {
        jQuery(this).prop('checked', false);
    });
    jQuery('#filtersearch').val('');

    jQuery('.tab-link').click(function () {
        var Panel = jQuery(this).attr('id');
        jQuery('.tab-link').removeClass('active');
        jQuery(this).addClass('active');
        jQuery('.custom-tab-panel').removeClass('active');
        jQuery('[data-panel="' + Panel + '"]').addClass('active');
        resetFilter();
        jQuery('#filtersearch').val('');
        jQuery('.partner-col').show();
        if (jQuery('#technology-tab').hasClass('active')) {
            jQuery('.filters-holder').slideUp();
        } else {
            jQuery('.filters-holder').slideDown();
        }
    });

    jQuery('.selection').click(function () {
        jQuery(this).toggleClass('active');
        jQuery('.selection').not(this).removeClass('active');
        var select = jQuery(this).next('.select-list');
        jQuery('.select-list').not(select).slideUp();
        select.slideToggle();
    });

    jQuery('input[name="servi"]').change(function () {
        var textArray = '';
        var valArray = [];
        var count = jQuery('input[name="servi"]:checked').length;
        var i = 1;
        jQuery('input[name="servi"]:checked').each(function () {
            var labeltext = jQuery(this).next('label').text();
            var valuefilter = jQuery(this).val();
            valArray.push(valuefilter);
            if (count == i) {
                textArray += labeltext;
            } else {
                textArray += labeltext + ', ';
            }
            i++;
        });
        jQuery('#services').val(textArray);
        jQuery('#services').data('value', valArray);
        iniFilter();
    });


    jQuery('.cert-list li').click(function () {
        var filter2 = jQuery(this).data('certificate');
        jQuery(this).parent('.select-list').slideUp();
        jQuery(this).closest('.input-outer').find('.selection').removeClass('active');
        var value1 = jQuery(this).text();
        jQuery('#certificates').val(value1);
        jQuery('#certificates').data('value', filter2);
        iniFilter();
    });

    jQuery('input[name="country"]').change(function () {
        var textArray = '';
        var valArray = '';
        var count = jQuery('input[name="country"]:checked').length;
        var i = 1;
        jQuery('input[name="country"]:checked').each(function () {
            var labeltext = jQuery(this).next('label').text();
            var valuefilter = jQuery(this).val();
            valArray += valuefilter + ' ';
            if (count == i) {
                textArray += labeltext;
            } else {
                textArray += labeltext + ', ';
            }
            i++;
        });
        jQuery('#country').val(textArray);
        jQuery('#country').data('value', valArray);
        iniFilter();
    });

    jQuery.extend(jQuery.expr[":"], {
        "containsIN": function (elem, i, match, array) {
            return (elem.textContent || elem.innerText || "").toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
        }
    });

    jQuery('#filtersearch').keyup(function () {
        resetFilter();
        jQuery('.partner-col').hide();
        var value = jQuery(this).val();
        jQuery('.partner-col:containsIN("' + value + '")').show();
    });

    jQuery('#fieldname').change( function (){
        doCalculation2();
    });
    jQuery('#fieldemail').change( function (){
        doCalculation2();
    });
    jQuery('#fieldorg').change( function (){
        doCalculation2();
    });
    jQuery('#fieldphone').change( function (){
        doCalculation2();
    });
    jQuery('#fieldaddress').change( function (){
        doCalculation2();
    });
    jQuery('#fieldoutlook').change( function (){
        doCalculation2();
    });
    jQuery('#fieldterms').change( function (){
        doCalculation2();
    });
    jQuery('#fieldusers').change( function (){
        setUsers();
    });


    jQuery('#field1name').change( function (){
        doCalculation();
    });
    jQuery('#field1email').change( function (){
        doCalculation();
    });
    jQuery('#field1org').change( function (){
        doCalculation();
    });
    jQuery('#field1phone').change( function (){
        doCalculation();
    });
    jQuery('#field1address').change( function (){
        doCalculation();
    });
    jQuery('#edition').change( function (){
        doCalculation();
    });
    jQuery('#field1duration').change( function (){
        doCalculation();
    });
    jQuery('#field1edugov').change( function (){
        doCalculation();
    });
    jQuery('#field1outlook').change( function (){
        doCalculation();
    });
    jQuery('#collaboraCheck').change( function (){
        doCalculation();
    });
    jQuery('#onlyofficeCheck').change( function (){
        doCalculation();
    });
    jQuery('#field1terms').change( function (){
        doCalculation();
    });
    
    
    jQuery('#field1users').change( function (){
        setUsers();
    });

});

jQuery(window).scroll(function () {
    var cutoff = jQuery(window).scrollTop();

    jQuery('section').each(function () {
        if (jQuery(this).offset().top + jQuery(this).height() > cutoff) {
            var targetSection = jQuery(this).attr('id');
            jQuery('.page-nav a').removeClass('current-section');
            jQuery('.page-nav a[href="#' + targetSection + '"]').addClass('current-section');
            return false; // stops the iteration after the first one on screen
        }
    });
});

function fixedMeni() {
    var windowWidth = jQuery(window).innerWidth();
    if (windowWidth > 111) {
        jQuery(window).on('load scroll resize orientationchange', function () {
            if (jQuery(document).scrollTop() > 1) {
                jQuery("header").addClass('scrolled');
            } else {
                jQuery("header").removeClass('scrolled');
            }
        });
    } else {
        jQuery(window).on('load scroll resize orientationchange', function () {
            jQuery("header").removeClass('scrolled');
        });
    }
}
;

function iniFilter() {
    var filter1 = jQuery('#services').data('value');
    var filter2 = jQuery('#certificates').data('value');
    var filter3 = jQuery('#country').data('value');
    if (jQuery.inArray("all-dev", filter1) !== -1 || filter1.length === 0) {
        var allDev = 1;
    }
    if (filter2 == 'all-cert') {
        filter2 = '';
    }
    if (filter3.includes('all-comp') || filter3 == '') {
        filter3 = 'x';
    }
    jQuery('.partner-col').each(function () {
        var values = jQuery(this).data('type');
        if (filter3 == 'x') {
            var country = 'x';
        } else {
            var country = jQuery(this).data('country');
        }
        if (allDev == 1) {
            if (values.includes(filter2) && filter3.includes(country)) {
                jQuery(this).show();
            } else {
                jQuery(this).hide();
            }
        } else {
            if (filter1.every(item => values.includes(item)) && values.includes(filter2) && filter3.includes(country)) {
                jQuery(this).show();
            } else {
                jQuery(this).hide();
            }
        }
    });
}
function resetFilter() {
    jQuery('#services').val('All services');
    jQuery('#services').data('value', 'all-dev');
    jQuery('#certificates').val('All levels');
    jQuery('#certificates').data('value', 'all-cert');
    jQuery('#country').val('All');
    jQuery('#country').data('value', 'all-comp');
    jQuery('input[type="checkbox"]').each(function () {
        jQuery(this).prop('checked', false);
    });
}


// if we need to do something when the user number is changed...
function setUsers() {
    var theForm = document.forms["orderform"];
    // 			var includeCollaboraUsers = theForm.elements["collabora"];
    // 			var usersNumber = theForm.elements["users"];
    // 			var chosenEdition = theForm.elements["edition"];
    doCalculation();
}

function getUsersPrice() {
    var usersPrice = 1900;
    //Get a reference to the form id="orderform"
    var theForm = document.forms["orderform"];
    //Get a reference to the select id="users"
    var usersNumber = theForm.elements["users"];
    var chosenEdition = theForm.elements["edition"];
    var edugovDiscount = theForm.elements["edugov"];
    //set users price based on the number of users chosen and the edition. Yes, we could calculate this but that is complicated and it is easier updated as well this way.
    if (chosenEdition.value == "basic") {
        if (usersNumber.value == 50) {
            usersPrice = 1995;
        }
        if (usersNumber.value == "75") {
            usersPrice = 2782;
        }
        if (usersNumber.value == "100") {
            usersPrice = 3570;
        }
        if (usersNumber.value == "150") {
            usersPrice = 4620;
        }
        if (usersNumber.value == "200") {
            usersPrice = 5670;
        }
        if (usersNumber.value == "250") {
            usersPrice = 6720;
        }
    }
    if (chosenEdition.value == "standard") {
        if (usersNumber.value == "50") {
            usersPrice = 3604;
        }
        if (usersNumber.value == "75") {
            usersPrice = 5034;
        }
        if (usersNumber.value == "100") {
            usersPrice = 6466;
        }
        if (usersNumber.value == "150") {
            usersPrice = 8056;
        }
        if (usersNumber.value == "200") {
            usersPrice = 9646;
        }
        if (usersNumber.value == "250") {
            usersPrice = 11235;
        }
    }
    // apply multi-year discount and edu/gov/charity discount
    usersPrice = multiYearDiscount(edugovcharDiscount(usersPrice));

    //finally we return usersPrice
    return usersPrice;
}


// function to optionally apply educational discount. As the percentage varies, it has to be given to the formula.
function eduDiscount(amount, percentage) {
    //Get a reference to the form id="orderform", to education discount and duration
    var theForm = document.forms["orderform"];
    var discount = theForm.elements["edugov"];
    if (discount.value == "edu") {
        amount = amount * percentage;
    }
    return amount;
}

// function to apply the standard discounts over the three categories.
function edugovcharDiscount(amount) {
    //Get a reference to the form id="orderform", to education discount and duration
    var theForm = document.forms["orderform"];
    var discount = theForm.elements["edugov"];
    var chosenEdition = theForm.elements["edition"];

    if (chosenEdition.value == "standard") {
        if (discount.value != "no") {
            if (discount.value == "edu") {
                return amount *= 0.9;
            }
            if (discount.value == "gov") {
                return amount *= 0.9;
            }
            if (discount.value == "charity") {
                return amount *= 0.9;
            }
        }
    }
    return amount;
}

// function to optionally apply an equal discount percentage over any of the three categories.
function anyDiscount(amount, percentage) {
    //Get a reference to the form id="orderform", to education discount and duration
    var theForm = document.forms["orderform"];
    var discount = theForm.elements["edugov"];
    if (discount.value != "no") {
        amount = amount * percentage;
    }
    return amount;
}

// function to apply multi-year discount
function multiYearDiscount(price) {
    //Get a reference to the form id="orderform", to education discount and duration
    var theForm = document.forms["orderform"];
    var contractLength = theForm.elements["duration"];

    if (contractLength.value == 2) {
        return price *= 1.92;
    }
    else if (contractLength.value == 3) {
        return price *= 2.8;
    }
    else return price;
}

function getOptionsPrice() {
    var optionsPrice = 0;
    var collaboraPrice = 0;
    var outlookPrice = 0;
    var onlyofficePrice = 0;
    //Get a reference to the form id="orderform"
    var theForm = document.forms["orderform"];
    //Get a reference to the select id="users" and the other elements needed
    // 		    var includeCollaboraUsers = theForm.elements["collabora"];
    var includeCollaboraCheck = theForm.elements["collaboraCheck[]"];
    var includeOnlyofficeCheck = theForm.elements["onlyofficeCheck[]"];
    var includeOutlook = theForm.elements["outlook[]"];
    // 			var includeRemoteinstall = theForm.elements["remoteinstall"];
    // var includeBranding = theForm.elements["branding"];
    // var includeSpreed = theForm.elements["spreed"];
    var selectedUsersNumber = theForm.elements["users"];
    var chosenEdition = theForm.elements["edition"];
    var edugovDiscount = theForm.elements["edugov"];
    var contractLength = theForm.elements["duration"];
    //check if they are checked and if so, add the monies

    // collabora, Outlook and remote install only with Standard
    if (includeOutlook.checked == true) {
        outlookPrice = multiYearDiscount(selectedUsersNumber.value * 7.2);
        // apply edu/gov/charity discount
        outlookPrice = edugovcharDiscount(outlookPrice);
        optionsPrice = optionsPrice + outlookPrice;
    }
    if (chosenEdition.value !== "basic") {
        if (includeCollaboraCheck.checked == true) {
            // 					if( includeCollaboraUsers.value <= 100)
            if (selectedUsersNumber.value <= 100) {
                collaboraPrice = multiYearDiscount(selectedUsersNumber.value * 17);
            }
            else if (selectedUsersNumber.value > 99) {
                collaboraPrice = multiYearDiscount(1683 + (selectedUsersNumber.value - 99) * 16);
            }
            // apply edu discount (no gov, charity)
            collaboraPrice = eduDiscount(collaboraPrice, 0.25);
            optionsPrice = optionsPrice + collaboraPrice;
        }
        if (includeOnlyofficeCheck.checked == true) {
            optionsPrice = optionsPrice + (contractLength.value * 935);
        }
    }
    return optionsPrice;
}

function getTotal() {
    //Here we calculate, return and show the total price by calling our function

    // set variables
    var theForm = document.forms["orderform"];
    var contractLength = theForm.elements["duration"];
    var selectedUsersNumber = theForm.elements["users"];
    var inDollars = theForm.elements["dollars[]"];
    // 			var edugovDiscount = theForm.elements["edugov"];
    //Each function returns a number so by calling them we add the values they return together
    var finalPrice = getUsersPrice() + getOptionsPrice();
    var peruserfinalPrice = finalPrice / selectedUsersNumber.value / contractLength.value / 12;

    //display the result (dollars or euro's)
    if (inDollars.checked == false) {
        document.getElementById('totalprice').innerHTML = " € " + Math.round(finalPrice);
        document.getElementById('peruserprice').innerHTML = " € " + peruserfinalPrice.toPrecision(3);
    }
    if (inDollars.checked == true) {
        var finalPrice = finalPrice * 1.1;
        document.getElementById('totalprice').innerHTML = " $ " + Math.round(finalPrice);
        document.getElementById('peruserprice').innerHTML = " $ " + Math.round(peruserfinalPrice);
    }
    return +Math.round(finalPrice);
}
var firstCall = true;
function checkSubscription() {
    //disable optional features when basic subscription is chosen; enable submit button when terms are accepted
    var theForm = document.forms["orderform"];
    // 			var includeCollaboraUsers = theForm.elements["collabora"];
    var includeCollaboraCheck = theForm.elements["collaboraCheck[]"];
    var includeOnlyofficeCheck = theForm.elements["onlyofficeCheck[]"];
    var includeOutlook = theForm.elements["outlook[]"];
    // var includeBranding = theForm.elements["branding"];
    // var includeSpreed = theForm.elements["spreed"];
    var chosenEdition = theForm.elements["edition"];
    var agreedToTerms = theForm.elements["terms[]"];
    var submitButton = theForm.getElementsByClassName("wpcf7-submit");
    var selectedUsersNumber = theForm.elements["users"];
    // 			document.getElementById("collaboraUserNumberChoiceDiv").style.display = "none";
    // 			document.getElementById("getenterprisequote").style.display = "none";
    // disable them by default as they are blocked by the default basic subscription
    // 			includeCollaboraUsers.disabled = false;
    includeCollaboraCheck.disabled = false;
    includeOnlyofficeCheck.disabled = false;
    includeOutlook.disabled = false;
    // includeSpreed.disabled = false;
    // includeBranding.disabled = false;
    submitButton.disabled = true;
    // 			var numberOfCollaboraUsers = includeCollaboraUsers.value;
    var numberOfSelectedUsers = selectedUsersNumber.value;
    // 			document.getElementById("minUsers").style.fontWeight = "normal";
    // 			document.getElementById("maxUsers").style.fontWeight = "normal";

    // you can't have less collabora users than Nextcloud users
    // 			if(includeCollaboraCheck.checked==false)
    // 			{
    // 				includeCollaboraUsers.value = 0;
    // 			}
    // 			if(includeCollaboraCheck.checked==true)
    // 			{
    // 				document.getElementById("collaboraUserNumberChoiceDiv").style.display = "block";
    //
    // 				if(parseInt(numberOfCollaboraUsers) < 20) {
    // 					numberOfCollaboraUsers = numberOfSelectedUsers;
    // 				}
    //
    // 				if(((parseInt(numberOfCollaboraUsers) * 4) + 1) < parseInt(numberOfSelectedUsers))
    // 				{
    // 					numberOfCollaboraUsers  = numberOfSelectedUsers / 4;
    // 					document.getElementById("minUsers").style.fontWeight = "bold";
    // 					// handle the weird numbers
    // 					if (parseInt(numberOfCollaboraUsers) < 50)
    // 					{
    // 						numberOfCollaboraUsers = 50;
    // 					}
    // 					if (numberOfCollaboraUsers == "62.5")
    // 					{
    // 						numberOfCollaboraUsers = 75;
    // 					}
    // 				}
    //
    // 				if(parseInt(numberOfCollaboraUsers) > parseInt(numberOfSelectedUsers))
    // 				{
    // 					document.getElementById("maxUsers").style.fontWeight = "bold";
    // 					numberOfCollaboraUsers = numberOfSelectedUsers;
    //
    // 				}
    //
    // 				includeCollaboraUsers.value = numberOfCollaboraUsers;
    // 			}


    if (chosenEdition.value == "basic") {
        // 				includeCollaboraUsers.disabled = true;
        includeCollaboraCheck.disabled = true;
        includeOnlyofficeCheck.disabled = true;
        // 				includeOutlook.disabled = true;
        // includeSpreed.disabled = true;
        // includeBranding.disabled = true;
    }

    // you can't pick premium so we set it back to standard and show the info about asking sales for a quote.
    // 			if(chosenEdition.value=="premium")
    // 			{
    // 				document.getElementById("getenterprisequote").style.display = "block";
    // 				chosenEdition.value="standard";
    // 				alert("Sorry, you can't order the Premium Subscription through this form. Please ask our sales team for a quote.");
    // figure out how to zero the price
    // 			}

    if (firstCall) {
        firstCall = false;
        // don't show errors on very first call
        return;
    }


    var enableSubmitButton = true;

    // required form elements
    var yourName = theForm.elements["yourname"];
    var email = theForm.elements["email"];
    var organization = theForm.elements["organization"];
    var phone = theForm.elements["phone"];
    var address = theForm.elements["address"];

    if (yourName.value == '') {
        yourName.classList.add('error');
        enableSubmitButton = false;
    } else {
        var expression = /^[A-Za-z .'-]+$/,
            yourNameError = jQuery('#yourname-error');

        if (expression.test(yourName.value)) {
            yourName.classList.remove('error');
            yourNameError.html('');
        } else {
            var message = '<?php echo $l->t("The name you entered does not appear to be valid.");?>';
            yourNameError.html('<br />' + message);
            yourName.classList.add('error');
            enableSubmitButton = false;
        }
    }

    if (email.value == '') {
        email.classList.add('error');
        enableSubmitButton = false;
    } else {
        var expression = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,10}$/,
            emailError = jQuery('#email-error');

        if (expression.test(email.value)) {
            email.classList.remove('error');
            emailError.html('');
        } else {
            var message = '<?php echo $l->t("The email address you entered does not appear to be valid.");?>';
            emailError.html('<br />' + message);
            email.classList.add('error');
            enableSubmitButton = false;
        }
    }

    if (organization.value == '') {
        organization.classList.add('error');
        enableSubmitButton = false;
    } else {
        organization.classList.remove('error');
    }

    if (phone.value == '') {
        phone.classList.add('error');
        enableSubmitButton = false;
    } else {
        phone.classList.remove('error');
    }

    if (address.value == '') {
        address.classList.add('error');
        enableSubmitButton = false;
    } else {
        address.classList.remove('error');
    }

    // only when the terms are agreed to can you submit the form
    if (agreedToTerms.checked != true) {
        enableSubmitButton = false;
    }

    if (enableSubmitButton == true) {
        submitButton.disabled = "";
        jQuery('#form-error').addClass('hidden');
    } else {
        submitButton.disabled = "disabled";
        jQuery('#form-error').removeClass('hidden');
    }
}
// this function is called whenever the user changes any of the form values to re-calculate the price and disable or enable options.
function doCalculation() {
    checkSubscription();
    getTotal();
}
// this function listens to the submit event and adds the price to it before sending it out
jQuery('#orderform').submit(function (eventObj) { //listen to submit event
    var theForm = document.forms["orderform"];
    var inDollars = theForm.elements["dollars[]"];
    var includePrice = getTotal();
    jQuery(this).append('<input type="hidden" name="givenPrice" value="' + includePrice + '">');
    return true;
});

// if we need to do something when the user number is changed...
function setUsers2() {
    var theForm = document.forms["orderform"];
    // 			var includeCollaboraUsers = theForm.elements["collabora"];
    // 			var usersNumber = theForm.elements["users"];
    // 			var chosenEdition = theForm.elements["edition"];
    doCalculation2();
}

function getUsersPrice2() {
    var usersPrice = 9.5;
    //Get a reference to the form id="orderform"
    var theForm = document.forms["orderform"];
    //Get a reference to the select id="users"
    var usersNumber = theForm.elements["users"];
    var selectedUsersNumber = theForm.elements["users"];
    var edugovDiscount = theForm.elements["edugov"];
    //set users price based on the number of users chosen and the edition. Yes, we could calculate this but that is complicated and it is easier updated as well this way.
    //             console.log(selectedUsersNumber.value);
    usersPrice = usersNumber.value * 9.5;

    // apply multi-year discount and edu/gov/charity discount
    usersPrice = multiYearDiscount2(edugovcharDiscount2(usersPrice));

    //finally we return usersPrice
    // 		    console.log(usersPrice.value);
    return usersPrice;
}


// function to optionally apply educational discount. As the percentage varies, it has to be given to the formula.
// 		function eduDiscount(amount,percentage)
// 		{
// 			//Get a reference to the form id="orderform", to education discount and duration
// 			var theForm = document.forms["orderform"];
// 		    var discount = theForm.elements["edugov"];
// 		    if(discount.value=="edu")
// 			{
// 				amount = amount * percentage;
// 			}
// 			return amount;
// 		}

// function to apply the standard discounts over the three categories.
function edugovcharDiscount2(amount) {
    //Get a reference to the form id="orderform", to education discount and duration
    var theForm = document.forms["orderform"];
    var discount = theForm.elements["edugov"];
    var discount = "no";

    if (discount.value != "no") {
        if (discount.value == "edu") {
            return amount *= 0.9;
        }
        if (discount.value == "gov") {
            return amount *= 0.9;
        }
        if (discount.value == "charity") {
            return amount *= 0.9;
        }
    }
    return amount;
}

// function to optionally apply an equal discount percentage over any of the three categories.
function anyDiscount2(amount, percentage) {
    //Get a reference to the form id="orderform", to education discount and duration
    var theForm = document.forms["orderform"];
    var discount = theForm.elements["edugov"];
    var discount = "no";
    if (discount.value != "no") {
        amount = amount * percentage;
    }
    return amount;
}

// function to apply multi-year discount
function multiYearDiscount2(price) {
    //Get a reference to the form id="orderform", to education discount and duration
    var contractLength = 1;
    // 			var contractLength = theForm.elements["duration"];
    var theForm = document.forms["orderform"];
    if (contractLength.value == 2) {
        return price *= 1.90;
    }
    else if (contractLength.value == 3) {
        return price *= 2.75;
    }
    else return price;
}

function getOptionsPrice2() {
    var optionsPrice = 0;
    var outlookPrice = 0;
    //Get a reference to the form id="orderform"
    var theForm = document.forms["orderform"];
    //Get a reference to the select id="users" and the other elements needed
    // 		    var includeCollaboraUsers = theForm.elements["collabora"];
    var includeOutlook = theForm.elements["outlook[]"];
    // var includeBranding = theForm.elements["branding"];
    // var includeSpreed = theForm.elements["spreed"];
    var selectedUsersNumber = theForm.elements["users"];
    var chosenEdition = "standard";
    var edugovDiscount = theForm.elements["edugov"];
    //check if they are checked and if so, add the monies

    // collabora, Outlook and remote install only with Standard
    if (includeOutlook.checked == true) {
        outlookPrice = multiYearDiscount2(selectedUsersNumber.value * 0.6);
        // apply edu/gov/charity discount
        outlookPrice = edugovcharDiscount2(outlookPrice);
        optionsPrice = optionsPrice + outlookPrice;
    }
    return optionsPrice;
}

function round_to_precision2(x, precision) {
    var y = +x + (precision === undefined ? 0.5 : precision / 2);
    return y - (y % (precision === undefined ? 1 : +precision));
}
function getTotal2() {
    //Here we calculate, return and show the total price by calling our function

    // set variables
    var theForm = document.forms["orderform"];
    // 			var contractLength = theForm.elements["duration"];
    var inDollars = theForm.elements["dollars[]"];
    // 			var edugovDiscount = theForm.elements["edugov"];
    //Each function returns a number so by calling them we add the values they return together
    var finalPrice = round_to_precision2(getUsersPrice2() + getOptionsPrice2(), 0.5);
    var selectedUsersNumber = theForm.elements["users"];
    //display the result (dollars or euro's)
    // 			if(usersNumber<201) {
    if (inDollars.checked == false) {
        document.getElementById('totalprice').innerHTML = " € " + finalPrice.toFixed(2);
    }
    if (inDollars.checked == true) {
        var finalPrice = finalPrice * 1.1;
        document.getElementById('totalprice').innerHTML = " $ " + finalPrice.toFixed(2);
    }
    //             }
    console.log(selectedUsersNumber.value);
    if (selectedUsersNumber.value == "201") {
        document.getElementById('totalprice').innerHTML = "custom";
    }
    return +finalPrice.toFixed(2);
}
var firstCall = true;
function checkSubscription2() {
    //disable optional features when basic subscription is chosen; enable submit button when terms are accepted
    var theForm = document.forms["orderform"];
    // 			var includeCollaboraUsers = theForm.elements["collabora"];
    // 			var includeCollaboraCheck = theForm.elements["collaboraCheck"];
    var includeCollaboraCheck = false;
    // 			var includeOnlyofficeCheck = theForm.elements["onlyofficeCheck"];
    var includeOnlyofficeCheck = false;
    var includeOutlook = theForm.elements["outlook[]"];
    // var includeBranding = theForm.elements["branding"];
    // var includeSpreed = theForm.elements["spreed"];
    // 			var includeRemoteinstall = theForm.elements["remoteinstall"];
    var includeRemoteinstall = false;
    var chosenEdition = "standard";
    var agreedToTerms = theForm.elements["terms[]"];
    var submitButton = theForm.getElementsByClassName("wpcf7-submit");
    var selectedUsersNumber = theForm.elements["users"];
    // 			document.getElementById("collaboraUserNumberChoiceDiv").style.display = "none";
    // 			document.getElementById("getenterprisequote").style.display = "none";
    // disable them by default as they are blocked by the default basic subscription
    includeRemoteinstall.disabled = false;
    // 			includeCollaboraUsers.disabled = false;
    includeCollaboraCheck.disabled = false;
    includeOnlyofficeCheck.disabled = false;
    includeOutlook.disabled = false;
    // includeSpreed.disabled = false;
    // includeBranding.disabled = false;
    submitButton.disabled = true;
    // 			var numberOfCollaboraUsers = includeCollaboraUsers.value;
    var numberOfSelectedUsers = selectedUsersNumber.value;
    // 			document.getElementById("minUsers").style.fontWeight = "normal";
    // 			document.getElementById("maxUsers").style.fontWeight = "normal";

    // you can't have less collabora users than Nextcloud users
    // 			if(includeCollaboraCheck.checked==false)
    // 			{
    // 				includeCollaboraUsers.value = 0;
    // 			}
    // 			if(includeCollaboraCheck.checked==true)
    // 			{
    // 				document.getElementById("collaboraUserNumberChoiceDiv").style.display = "block";
    //
    // 				if(parseInt(numberOfCollaboraUsers) < 20) {
    // 					numberOfCollaboraUsers = numberOfSelectedUsers;
    // 				}
    //
    // 				if(((parseInt(numberOfCollaboraUsers) * 4) + 1) < parseInt(numberOfSelectedUsers))
    // 				{
    // 					numberOfCollaboraUsers  = numberOfSelectedUsers / 4;
    // 					document.getElementById("minUsers").style.fontWeight = "bold";
    // 					// handle the weird numbers
    // 					if (parseInt(numberOfCollaboraUsers) < 50)
    // 					{
    // 						numberOfCollaboraUsers = 50;
    // 					}
    // 					if (numberOfCollaboraUsers == "62.5")
    // 					{
    // 						numberOfCollaboraUsers = 75;
    // 					}
    // 				}
    //
    // 				if(parseInt(numberOfCollaboraUsers) > parseInt(numberOfSelectedUsers))
    // 				{
    // 					document.getElementById("maxUsers").style.fontWeight = "bold";
    // 					numberOfCollaboraUsers = numberOfSelectedUsers;
    //
    // 				}
    //
    // 				includeCollaboraUsers.value = numberOfCollaboraUsers;
    // 			}


    if (chosenEdition.value == "basic") {
        includeRemoteinstall.disabled = true;
        // 				includeCollaboraUsers.disabled = true;
        includeCollaboraCheck.disabled = true;
        includeOnlyofficeCheck.disabled = true;
        // 				includeOutlook.disabled = true;
        // includeSpreed.disabled = true;
        // includeBranding.disabled = true;
    }

    // you can't pick premium so we set it back to standard and show the info about asking sales for a quote.
    // 			if(chosenEdition.value=="premium")
    // 			{
    // 				document.getElementById("getenterprisequote").style.display = "block";
    // 				chosenEdition.value="standard";
    // 				alert("Sorry, you can't order the Premium Subscription through this form. Please ask our sales team for a quote.");
    // figure out how to zero the price
    // 			}

    if (firstCall) {
        firstCall = false;
        // don't show errors on very first call
        return;
    }


    var enableSubmitButton = true;

    // required form elements
    var yourName = theForm.elements["yourname"];
    var email = theForm.elements["email"];
    var organization = theForm.elements["organization"];
    var phone = theForm.elements["phone"];
    var address = theForm.elements["address"];

    if (yourName.value == '') {
        yourName.classList.add('error');
        enableSubmitButton = false;
    } else {
        var expression = /^[A-Za-z .'-]+$/,
            yourNameError = jQuery('#yourname-error');

        if (expression.test(yourName.value)) {
            yourName.classList.remove('error');
            yourNameError.html('');
        } else {
            var message = '<?php echo $l->t("The name you entered does not appear to be valid. Please only use characters a-z and A-Z.");?>';
            yourNameError.html('<br />' + message);
            yourName.classList.add('error');
            enableSubmitButton = false;
        }
    }

    if (email.value == '') {
        email.classList.add('error');
        enableSubmitButton = false;
    } else {
        var expression = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,10}$/,
            emailError = jQuery('#email-error');

        if (expression.test(email.value)) {
            email.classList.remove('error');
            emailError.html('');
        } else {
            var message = '<?php echo $l->t("The email address you entered does not appear to be valid. Please only use characters a-z and A-Z and numbers.");?>';
            emailError.html('<br />' + message);
            email.classList.add('error');
            enableSubmitButton = false;
        }
    }

    if (organization.value == '') {
        organization.classList.add('error');
        enableSubmitButton = false;
    } else {
        organization.classList.remove('error');
    }

    if (phone.value == '') {
        phone.classList.add('error');
        enableSubmitButton = false;
    } else {
        phone.classList.remove('error');
    }

    if (address.value == '') {
        address.classList.add('error');
        enableSubmitButton = false;
    } else {
        address.classList.remove('error');
    }

    // only when the terms are agreed to can you submit the form
    if (agreedToTerms.checked != true) {
        enableSubmitButton = false;
    }

    if (enableSubmitButton == true) {
        submitButton.disabled = "";
        jQuery('#form-error').addClass('hidden');
    } else {
        submitButton.disabled = "disabled";
        jQuery('#form-error').removeClass('hidden');
    }
}
// this function is called whenever the user changes any of the form values to re-calculate the price and disable or enable options.
function doCalculation2() {
    checkSubscription2();
    getTotal2();
}

// this function listens to the submit event and adds the price to it before sending it out
jQuery('.ionos-form-section #orderform').submit(function (eventObj) { //listen to submit event
    var theForm = document.forms["orderform"];
    var inDollars = theForm.elements["dollars[]"];
    var includePrice = getTotal2();
    jQuery(this).append('<input type="hidden" name="givenPrice" value="' + includePrice + '">');
    return true;
});