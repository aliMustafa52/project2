// document.getElementById("demo").innerHTML = "Hello JavaScript";

function runAll() {
  document.getElementById("show").innerHTML = `t = ${trialAndError()}`;
  wqOfN();
  showImage();
}
function trialAndError() {
  let k = parseInt(document.getElementById("kkkk").value);
  console.log(k);
  let mu = parseInt(document.getElementById("mu").value);
  let lamba = parseInt(document.getElementById("Lambda").value);
  let t = (k - lamba / mu) * ((mu * lamba) / (mu - lamba));

  for (let i = 0; i < t; i++) {
    let res = Math.trunc(i / lamba) - Math.trunc(i / mu - lamba / mu);
    if (res == k) return i;
  }
  return Math.trunc(t);
}
function test() {
  var x = document.getElementById("kkkk").value;
  console.log(x);
  // document.getElementById("myText").value
}

function wqOfN() {
  let k = parseInt(document.getElementById("kkkk").value);

  let mu = parseInt(document.getElementById("mu").value);
  let lamba = parseInt(document.getElementById("Lambda").value);

  let res = trialAndError(k, mu, lamba);
  let output = "";
  for (let i = 1; i < res / lamba; i++) {
    output += `wq(${i}) = ${(mu - lamba) * (i - 1)}`;
  }
  document.getElementById("show1").innerHTML = output;
  document.getElementById("show2").innerHTML = `wq(n) = ${
    (mu - lamba) * (res / lamba - 3)
  } or 
  wq(n) = ${(mu - lamba) * (res / lamba - 2)}`;
}

function nOfT(k, mu, lamba) {
  let output = `when t≤1/${lamba} t = 0 
  when 1/${lamba}<t≤${trialAndError(k, mu, lamba)} t = (λt)-`;
}
function showImage() {
  var img = document.getElementById("myImageId");
  img.style.visibility = "visible";
}
/**
 * int trialAndError({required int k, required int mu, required int lamba}) {
    double t = (k - (lamba / mu)) * ((mu * lamba) / (mu - lamba));
    for (int i = 0; i < t; i++) {
      int res = (i / lamba).toInt() - (i / mu - lamba / mu).toInt();
      if (res == k) return i;
    }
    return t.toInt();
  }
   //(k - lamba / mu) * ((mu * lamba) / (mu - lamba))
  //(k * mu + lamba) / 2
 */
