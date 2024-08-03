function Article({ title, date = "January 1, 1970", preview, minutes}) {
    let coffeeEmoji = "☕️";
    let bentoEmoji = "🍱";
    let numOfEmoji;
    let emoji;

    if(minutes < 30){
        numOfEmoji = Math.ceil(minutes / 5);
        emoji = coffeeEmoji.repeat(numOfEmoji);

    } else if(minutes >= 30){
        numOfEmoji = Math.ceil(minutes/10);
        emoji = bentoEmoji.repeat(numOfEmoji);
    }

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}. {emoji} {minutes} min read</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;