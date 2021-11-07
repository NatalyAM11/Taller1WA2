import { CharacterElemObj } from "../types/CharacterElemObj";

export   const getChartArtifactsData = (characterElem: CharacterElemObj[]) => {
    const counters: {[key: string]: number} = {};

    characterElem.forEach((character) => {
      counters[character.name] = character.artifacts.length;
    });

    console.log(counters)
    return {
      labels: Object.keys(counters),
      datasets: [
        {
          label: '# of artefactos x personaje',
          data: Object.values(counters),
          backgroundColor: ['rgba(255, 99, 132, 0.2)'],
          borderColor: ['rgba(255, 99, 132, 1)'],
          borderWidth: 1,
        },
      ],
    };
  }