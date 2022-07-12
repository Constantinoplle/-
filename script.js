let phrases = [
    { text: 'попросить у Кици фотки', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH03OBGsS97DRLTTnxmCZAxWL0RJIsPhj_9w&usqp=CAU' },
    { text: 'попросить у Маши Фотки ножек', image: 'http://risovach.ru/upload/2013/08/mem/koteyka_26425209_big_.jpeg' },
    { text: 'разобраться, что происходит в мире', image: 'https://medialeaks.ru/wp-content/uploads/2022/01/fixd0iixmacvf3s.jpg' },
    { text: 'доказывать почему я люблю тебя больше', image: 'https://www.chitalnya.ru/upload2/616/4a234be8eb1285f7b076ee1a3f08abaf.jpeg' },
    { text: 'читать про зарплаты в Польше', image: 'https://code.s3.yandex.net/web-code/procrastinate/6.png' },
    { text: 'написать Маше о моей любви к ней', image: 'https://www.meme-arsenal.com/memes/d155f11d783ee29994b38dac2bf6cbbe.jpg' },
    { text: 'попасть в поток грустных мыслей и вспомнить все нелепые фразы брошенные при тебе', image: 'https://anews.com/upload/post/2020/11/01/121259430/gallery/tn/415697792.jpg' },
    { text: 'проверить непрочитанное в Telegram от Кици', image: 'https://code.s3.yandex.net/web-code/procrastinate/10.png' }
  ];
  
  function getRandomElement(arr) {
    let randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
  }
  
  let button = document.querySelector('.button');
  let phrase = document.querySelector('.phrase');
  let advice = document.querySelector('.advice');
  let image = document.querySelector('.image');
  
  button.addEventListener('click', function () {
    let randomElement = getRandomElement(phrases);
    smoothly(phrase, 'textContent', randomElement.text);
    smoothly(image, 'src', randomElement.image);
  
    if (randomElement.text.length > 40) {
      advice.style.fontSize = '33px';
    } else {
      advice.style.fontSize = '42px';
    }
  });
    for (let i=0; i<=2; i=i+1 ){
      console.log(phrases[i]);
      smoothly(phrase, 'textContent', phrases[i].text);
      smoothly(image, 'src', phrases[i].image);
    }