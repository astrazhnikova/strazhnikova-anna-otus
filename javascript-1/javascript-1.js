function sum(num) {
  this.currentsum = this.currentsum || 0;

  if (num === undefined || num === null)
    return this.currentsum ;

  this.currentsum  += Number(num);
  return sum;
}

console.log(sum(1)(2)(3)());