// 순열 - 순서까지 고려
// input [a,b,c]
// 첫 원소 a를 제외하고 순열을 만든 후에 a를 넣을 수 있는 모든 곳에 삽입
// output [a,b,c] [a,c,b] [b,a,c] [c,a,b] [b,c,a] [c,b,a]

function getPermutation (elements){
    // 원소가 하나라면 자기 자신을 반환
    if (elements.length === 1) {
        return [elements];
    }
    const permutations=[];
    // 첫번째 원소를 제외한 순열을 구해온다.(재귀)
    const smallerPermutations = getPermutation(elements.slice(1));

    //첫번째 원소를 넣을 수 있는 모든 곳에 삽입
    const firstElement = elements[0];
    smallerPermutations.forEach((permutation) =>{
        for (let positionIndex =0 ; positionIndex<= permutation.length ; positionIndex++){
            const perfix = permutation.slice(0, positionIndex); 
            const suffix= permutation.slice(positionIndex); 
            permutations.push(perfix.concat([firstElement], suffix)); 

        }
    })
    return permutations;
}