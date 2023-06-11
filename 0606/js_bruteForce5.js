//  피로도
function solution(k, dungeons) {
    let answer = 0;
    //방문 여부 배열
    const visited = Array.from({ length: dungeons.length }, () => false);
  
    // (남은 피로도, 진행단계)
    function DFS(hp, L) {
      for (let i = 0; i < dungeons.length; i++) {
        // 방문하지 않았고 현재 남은 피로도가 최소 필요도 보다 크거나 같으면 실행
        if (!visited[i] && dungeons[i][0] <= hp) {
          visited[i] = true;
          DFS(hp - dungeons[i][1], L + 1);
          // DFS 종료 후 방문을 끝내준다.
          visited[i] = false;
        }
      }
      // 가장 깊이 들어간 진행단계를 answer에 넣어준다.
      answer = Math.max(answer, L);
    }
  
    DFS(k, 0);
  
    return answer;
  }