$(function () {
  var $trigger = $('.fws-menu-trigger'),
    $searchTrigger = $('#search-trigger'),
    $close = $('.fws-menu-close'),
    $menu = $('.fws-menu'),
    $hasChildren = $('.has-children'),
    $back = $('.go-back'),
    $backBlock = $('.back-block'),
    $menuClose = $('#menu-close');

  $searchTrigger.on('click touchend tap', function () {
    $('.search-form').toggleClass('is-active');
  });

  $backBlock.on('click touchend tap', function () {
    $(this).parent('ul').addClass('is-hidden').closest('.move-out').removeClass('move-out');
  });

  $trigger.add($close).add($menuClose).on('click touchend tap', function(event){
    event.preventDefault();
    toggleNav();
  });

  $hasChildren.children('a').on('click touchend tap', function(event){
    event.preventDefault();
    var selected = $(this);
    selected.next('ul').removeClass('is-hidden').end().parent('.has-children').parent('ul').addClass('move-out');
  });

  $back.on('click touchend tap', function(){
    var selected = $(this),
      visibleNav = $(this).parent('ul').parent('.has-children').parent('ul');
    selected.parent('ul').addClass('is-hidden').parent('.has-children').parent('ul').removeClass('move-out');
  });

  function toggleNav(){
    var navIsVisible = ( !$menu.hasClass('is-active') ) ? true : false;
    $('.move-out').removeClass('move-out');
    $menu.toggleClass('is-active', navIsVisible);
    $trigger.toggleClass('is-active', navIsVisible);
    if( !navIsVisible ) {
      $menu.one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
        $('.has-children ul').addClass('is-hidden');
        $('.is-active').removeClass('is-active');
      });
    }
  }
});