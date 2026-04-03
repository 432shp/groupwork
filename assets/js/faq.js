document.addEventListener('DOMContentLoaded', function () {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionWrap = item.querySelector('.faq-question__wrap');
    const answerWrap = item.querySelector('.faq-answer__wrap');
    const plusIcon = item.querySelector('.plus-icon');

    questionWrap.addEventListener('click', () => {
      // 回答表示の切り替え
      answerWrap.classList.toggle('active');

      // アイコンの切り替え
      plusIcon.classList.toggle('active');
    });
  });
});