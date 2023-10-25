function validateId(id) {
  // 타입 검사
  if (typeof id !== 'string') {
    return false // 유효성 검사 측면에서는 error를 리턴하는 것보다 false를 리턴하는 것이 좋은 선택이 될 수 있다.
  }

  let state = { // 두개의 boolean 값을 변수로 관리할 수 있겠지만, 객체로 관리하는 것이 더 편리하다. 관용적으로는 이것을 '상태' 라는 뜻의 state라고 한다.
    hasLowerCase: false,
    hasUpperCaes: false,
  };   
  //  객체 state는 마치 전구 스위치처럼 두개가 true가 되는 듯이 작동하게끔 접근했다.

  for (let i = 0; i < id.length; i++) {
    // 상당히 절차적이지만, 원리를 이해하기 위해 까다로운 조건식을 모두 작성했다.
    // 메서드로 처리하면 매우 강력해진다.
    if (id[i] === id[i].toUpperCase() && id[i] !==id[i].toLowerCase()) {
      state.hasLowerCase = true;
    }

    if (id[i] === id[i].toLowerCase() && id[i] !== id[i].toUpperCase()) {
      state.hasLowerCase = true;
    }

    if (state.hasLowerCase || state.hasUpperCase) {
      // 둘중에 하나라도 true 면, true를 리턴한다.
      return true;
    }
  }

  return false;

}

console.log(validateId("kongUkjae")); //true
console.log(validateId(305)); // false



