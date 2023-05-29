// 조합 (combination) 구현하기
// Input: [1, 2, 3, 4] 에서의 4C3
// Output: [ [1, 2, 3], [1, 2, 4], [1, 3, 4], [2, 3, 4] ]

function getCombination (elements, pick) {
    if (pick === 1) return elements.map((el)=> [el]);

    const combinations=[];
    elements.forEach((element, index) => {
        const smallerCombinations = getCombination(elements.slice(index+1),pick -1);
        smallerCombinations.forEach(combination => {
            combinations.push([element].concat(combination));
        })
    });

    return combinations;
}

