import Button, { ButtonSuccess, ButtonSubmit } from "./Button";
import Container from "./Container";
import Line from "./Line";

function CompositionTest() {
  return (
    <>
      <hr />
      <h5>CompositionTest - Specialization</h5>
      <Button id="button1">Demostración</Button>
      <ButtonSuccess>Success</ButtonSuccess>
      <ButtonSubmit id="bs1" title="Proceed!">Submit</ButtonSubmit>
      <hr />
      <h5>CompositionTest - Containment</h5>
      <ul className="list-group list-group-flush">
        <Line>
          <p>A JavaScript library for building user interfaces</p>
        </Line>
        <Line>
          <>
            <span>
              <i className="bi bi-bar-chart-line-fill"></i> Infograph
            </span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Consectetur adipiscing elit pellentesque habitant morbi. Nec
              feugiat in fermentum posuere urna nec tincidunt.{" "}
            </p>
          </>
        </Line>
        <Line>
          <img src="data:image/png;base64,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" />
        </Line>
      </ul>
      <hr />
      <Container
        colA={<p>Lorem ipsum dolor sit amet, consectetur </p>}
        colB={<p>Lorem ipsum dolor sit amet, consectetur </p>}
        colC={<p>Lorem ipsum dolor sit amet, consectetur </p>}
      />
    </>
  );
}

export default CompositionTest;
