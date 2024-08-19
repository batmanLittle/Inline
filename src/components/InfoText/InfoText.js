import "./InfoText.css";

function InfoText({ text, bold, classText }) {
  const textWithLineBreaks = text.split("\n").map((line, index) => (
    // Добавляем <br /> только если строка не пустая
    <span className={`${classText} info-text__item`} key={index}>
      {line}
      {line && <br />} {/* Перенос строки только если line не пустое */}
    </span>
  ));

  if (bold) {
    const parts = text.split(/\*\*(.*?)\*\*/g);
    return (
      <div className="info-text">
        <p className={`${classText} info-text__item`}>
          {parts.map((part, index) => {
            // Если часть текста обрамлена **, делаем ее жирным
            if (index % 2 === 1) {
              return (
                <span className="bold" key={index}>
                  {part}
                </span>
              );
            }
            return part.split("\n").map((line, lineIndex) => (
              <span
                className={`${classText} info-text__item`}
                key={`${index}-${lineIndex}`}
              >
                {line}
                {line && <br />}{" "}
                {/* Перенос строки только если line не пустое */}
              </span>
            ));
          })}
        </p>
      </div>
    );
  }

  return <p className={`${classText} info-text__item`}>{textWithLineBreaks}</p>;
}

export default InfoText;
