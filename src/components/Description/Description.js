import "./Description.css";
import Table from "../Table/Table";
import InfoText from "../InfoText/InfoText";
import {
  textContent,
  characteristics,
  value,
  storage,
} from "../../utils/textData";

function Description({ windowWidth }) {
  return (
    <section className="description">
      <div className="description__container">
        <InfoText
          text={windowWidth > 500 ? textContent.full : textContent.bold}
          bold={windowWidth <= 500}
        />
        <div className="description__table">
          <Table
            windowWidth={windowWidth}
            title={"ХАРАКТЕРИСТИКИ"}
            items={characteristics}
          />
          <Table title={"ПИЩЕВАЯ ЦЕННОСТЬ НА 100Г"} items={value} />
          <Table title={"УСЛОВИЯ ХРАНЕНИЯ"} items={storage} />
        </div>
      </div>
    </section>
  );
}

export default Description;
