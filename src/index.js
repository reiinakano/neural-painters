import VisualTOC                      from './diagrams/VisualTOC.html';
import MyPaintVis                     from './diagrams/MyPaintVis.html';
import DIPExamples                    from "./diagrams/DIPExamples.html";
import SPIRALExamples                 from "./diagrams/SPIRALExamples.html";
import BiasedStrokeExamples           from "./diagrams/BiasedStrokeExamples.html";
import DIPAnimations                  from "./diagrams/DIPAnimations.html";

import ColabLink                      from './components/ColabLink.html';

// eagerly initialize vtoc  as it's above the fold
import { sections } from "./sections.json";
const tocNav = document.getElementById('vtoc');
const visualTOC = new VisualTOC({target: tocNav, data: {sections: sections}});

// lazily initialize any diagram below the fold. E.G:
// {
//   const figure = document.getElementById('StyleTransferExamples');
//   figure.addEventListener("ready", function() {
//     const styleTransferExamples = new StyleTransferExamples({target: figure});
//   });
// }

{
  const figure = document.getElementById("MyPaint-Vis");
  figure.addEventListener("ready", function() {
    const myPaintVis = new MyPaintVis({target: figure});
  });
}

{
  const figure = document.getElementById("DIP-Examples");
  figure.addEventListener("ready", function() {
    const cppnAnimations = new DIPExamples({target: figure});
  });
}

{
  const figure = document.getElementById("SPIRAL-Examples");
  figure.addEventListener("ready", function() {
    const spiralExamples = new SPIRALExamples({target: figure});
  })
}

{
  const figure = document.getElementById("Biased-Stroke-Examples");
  figure.addEventListener("ready", function() {
    const biasedStrokeExamples = new BiasedStrokeExamples({target: figure});
  })
}

{
  const figure =  document.getElementById("DIPAnimations");
  figure.addEventListener("ready", function() {
    const dipAnimations = new DIPAnimations({target: figure});
  })
}

function addColabLinks(sections) {
  for (const section of sections) {
    const className = "add-colab-link--" + section.anchor.slice(1);
    const elements = document.getElementsByClassName(className);
    for (const element of elements) {
      const data = {target: element, data: { url: section.colab_url }};
      const colabLink = new ColabLink(data);
    }
  }
}

addColabLinks(sections);
