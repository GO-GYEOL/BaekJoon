# [Bronze V] 사칙연산 - 10869 

[문제 링크](https://www.acmicpc.net/problem/10869) 

### 성능 요약

메모리: 9608 KB, 시간: 128 ms

### 분류

구현(implementation), 사칙연산(arithmetic), 수학(math)

### 문제 설명

<p>두 자연수 A와 B가 주어진다. 이때, A+B, A-B, A*B, A/B(몫), A%B(나머지)를 출력하는 프로그램을 작성하시오. </p>

### 입력 

 <p>두 자연수 A와 B가 주어진다. (1 ≤ A, B ≤ 10,000)</p>

### 출력 

 <p>첫째 줄에 A+B, 둘째 줄에 A-B, 셋째 줄에 A*B, 넷째 줄에 A/B, 다섯째 줄에 A%B를 출력한다.</p>

## 메모

 <p>백준 문제 페이지를 보면 입력 예제가 7 3 이었다. 띄어쓰기가 있으므로 입력받는 값이 number는 아닐테니 string이라 생각했지만, <br/>
 입력받은 값을 toString()을 통해 string으로 바꿔주지 않으면 오류가 났다. <br/>
 원인은 readFileSync의 인수로 인코딩을 지정해주지 않으면 Buffer 객체를 반환한다고 한다. <br/>
 따라서 toString()을 통해 문자열로 바꿔주는 연산이 필요했던 것이었다. <br/>
참조 : https://tesseractjh.tistory.com/39
</p>
