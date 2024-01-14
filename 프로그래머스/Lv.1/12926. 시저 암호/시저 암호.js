function solution(s, n) {
  let result = '';

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (char >= 'a' && char <= 'z') {
      result += String.fromCharCode((char.charCodeAt(0) - 'a'.charCodeAt(0) + n) % 26 + 'a'.charCodeAt(0));
    } else if (char >= 'A' && char <= 'Z') {
      result += String.fromCharCode((char.charCodeAt(0) - 'A'.charCodeAt(0) + n) % 26 + 'A'.charCodeAt(0));
    } else {
      result += char; 
    }
  }

  return result;
}