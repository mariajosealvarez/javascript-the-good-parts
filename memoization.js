// Generic example
// var	fibonacci	=	function	(n)	{
//   return	n	<	2	?	n	:	fibonacci(n	−	1)	+	fibonacci(n	−	2);
// };

// for	(var	i	=	0;	i	<=	10;	i	+=	1)	{
//   document.writeln('//	'	+	i	+	':	'	+	fibonacci(i));
// }

// First memoization approach
var fibonacci = (function() {
  var memo = [0, 1];
  var fib = function(n) {
    var result = memo[n];
    if (typeof result !== "number") {
      result = fib(n - 1) + fib(n - 2);
      memo[n] = result;
    }
    return result;
  };
  return fib;
})();
//This	function	returns	the	same	results,	but	it	is	called	only	29	times.	We	called	it	11	times.	It	called	itself
// 18	times	to	obtain	the	previously	memoized	results.

// Best approach
// We	can	generalize	this	by	making	a	function	that	helps	us	make	memoized	functions.	The	 memoizer
// function	will	take	an	initial	 memo 	array	and	the	 formula 	function.	It	returns	a	recur	function	that	manages
// the	memo	store	and	that	calls	the	 formula 	function	as	needed.	We	pass	the	 recur 	function	and	the
// function's	parameters	to	the	 formula 	function:

var memoizer = function(memo, formula) {
  var recur = function(n) {
    var result = memo[n];
    if (typeof result !== "number") {
      result = formula(recur, n);
      memo[n] = result;
    }
    return result;
  };
  return recur;
};
// We	can	now	define	fibonacci 	with	the	memoizer,	providing	the	initial	 memo 	array	and	 formula 	function:

var fibonacci = memoizer([0, 1], function(recur, n) {
  return recur(n - 1) + recur(n - 2);
});
