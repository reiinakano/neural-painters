import VisualTOC                      from './diagrams/VisualTOC.html';
import DIPExamples                   from "./diagrams/DIPExamples.html";

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
  const figure = document.getElementById("DIP-Examples");
  figure.addEventListener("ready", function() {
    const cppnAnimations = new DIPExamples({target: figure});
  });
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
