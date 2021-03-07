import Images from '../constants/Images'

import '../assets/css/faq.css'

const QA = [
  {
    question: 'Where will I get the gift card?',
    answer: 'You will receive it on Whatsapp/SMS on your mobile.',
    image: Images.whatsapp
  }, {
    question: 'When will I receive the gift card?',
    answer: 'Within 48 hours, when your Man Matters order is delivered.',
    image: Images.wallet
  }, {
    question: 'What if I cancel the order?',
    answer: 'The voucher will not delivered if you cancel the order.',
    image: Images.cancel
  },
]

const FAQ = () => {
  return (
    <div className="card-content ">
      {
        QA.map((item, index) => {
          return (
            <div className="info-box d-flex justfy-contect-between align-items-end" key={index}>
              <img src={item.image} />
              <div className="info">
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            </div>
          );
        })
      }
    </div>
  );
}

export default FAQ;
