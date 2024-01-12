const solution = (k, m, score) => {
    // 각 점수별로 개수를 세기 위한 배열 생성
    const countByScore = Array(k + 1).fill(0);

    // 각 점수별로 개수 세기
    for (const s of score) {
        countByScore[s]++;
    }

    let maxProfit = 0;

    // 최고 점수부터 최저 점수까지 반복
    for (let i = k; i >= 1; i--) {
        let boxes = Math.floor(countByScore[i] / m);

        // 현재 점수로 만들어진 상자의 이익 계산
        const profit = i * m * boxes;

        maxProfit += profit;

        // 남은 사과 개수 갱신
        countByScore[i - 1] += countByScore[i] % m;
    }

    return maxProfit;
};
