//	Create	a	maker	function	called	quo.	It	makes	an
//	object	with	a	get_status	method	and	a	private
//	status	property.
var quo = function(status) {
  return {
    get_status: function() {
      return status;
    }
  };
};
//	Make	an	instance	of	quo.
var myQuo = quo("amazed");
document.writeln(myQuo.get_status());

// This	 quo 	function	is	designed	to	be	used	without	the	 new 	prefix,	so	the	name	is	not	capitalized.	When	we
// call	 quo ,	it	returns	a	new	object	containing	a	 get_status 	method.	A	reference	to	that	object	is	stored	in
// myQuo .	The	 get_status 	method	still	has	privileged	access	to	 quo 's	 status 	property	even	though	 quo 	hasalready	returned.	 get_status 	does	not	have	access	to	a	copy	of	the	parameter;	it	has	access	to	the
// parameter	itself.	This	is	possible	because	the	function	has	access	to	the	context	in	which	it	was	created.
// This	is	called	closure.


