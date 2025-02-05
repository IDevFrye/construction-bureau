const modalBtn = $('.present__btn');
const modalClose = $('.modal-order__close');

const modalOrder = $('.modal-order');

modalBtn.click(function() {
  modalOrder.show(500);
});

modalClose.click(function() {
  modalOrder.hide(500);
});

const modalOrderInput = $('.modal-order__input');
const modalOrderTitle = $('.modal-order__title');

modalOrderInput.focus(function() {
  modalOrderTitle
  .text(`Введите ${$(this).attr('placeholder').toLowerCase()}`)
});

modalOrderInput.blur(function() {
  modalOrderTitle.text('Заполните форму')
});

const modalOrderWrapper = $('.modal-order__wrapper');

// modalOrderWrapper.mousedown(function() {
//   console.log(event.type);
// });

// modalOrderWrapper.mouseup(function() {
//   console.log(event.type);
// });

// const foo = function() {
//   $(this).next().slideToggle();
// };

// $('.what-building__text').on('click', foo);
// $('.what-building__box').on('click', foo);
// $('.what-building__list').off('click', '.what-building__text', foo);

// const div = $(`
//   <div class="hello-world">
//     <h1 class="title">Привет мир</h1>
//   </div>
// `);

// const div = $(`<div>`);
// div.css('padding', '40px');
// div.css('border', '3px solid black');

// div.html(`
//   <div class="hello-world">
//     <h1>Привет друзья!</h1>
//   </div>
// `);

// div.text('Привет мир');
// div.addClass('hello-world');

// $('body').append(div);

// div.remove(); 
// $('.title').remove();

// div.innerHeight();

$('.modal-order__form').submit(function (event) {
  event.preventDefault();

  // $.post('https://jsonplaceholder.typicode.com/todos', $(this).serialize()
  //   .then(function(data) {
  //     console.log(data);
  //     return data;
  //   })
  //   .catch(function(err) {
  //     console.log(err.status);
  //   })
  // );

  $.ajax({
    url: 'https://jsonplaceholder.typicode.com/todos',
    type: 'POST',
    data: $(this).serialize(),
    success(data) {
      modalOrderTitle.text('Спасибо! Ваша заявка принята, номер заявки ' + data.id)
      $('.modal-order__form').slideUp(300)
    },
    error() {
      modalOrderTitle.text('Что-то пошло не так, попробуйте позже!')
    }
  })
});

$('.header__burger').on('click', function() {
  $('.navigation').animate({
    left: 0,

  }, 500, function() {
    $('.navigation__close').animate({
      opacity: 1,
    }, 300, 'swing')
  });
})
