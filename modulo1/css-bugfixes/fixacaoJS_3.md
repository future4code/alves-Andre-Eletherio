```
function calculaNota(ex, p1, p2) {
  const media = (ex + p1 * 2 + p2 * 3) / 6;
  if (media >= 9) {
    return "A";
  } else if (media >= 7.5 && media < 9) {
    return "B";
  } else if (media >= 6 && media < 7.5) {
    return "C";
  } else {
    return "D";
  }
}
```