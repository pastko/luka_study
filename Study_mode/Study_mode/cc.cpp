#include "cc.h"

namespace ccs {

	ccc::ccc() : mfirsN(""), mlastN(""), mempN(-1), msalN(Dpay), mhired(false) {};
	void ccc::promote(int raisA){
		setsal(getsal() + raisA);
	};
	void ccc::demote(int deraisA)
	{
		setsal(getsal() - deraisA);
	}
	void ccc::hire() { mhired = true; };
	void ccc::fire() { mhired = false; };
	void ccc::display() const {
		cout << "emp : " << getl() << ", " << getf() << endl;
		cout << "========================================" << endl;
		cout << (mhired ? " cur E" : "former E") << endl;
		cout << "empN : " << getemp() << endl;
		cout << "salN : " << getsal() << endl;
		cout << endl;
	};
	
	
	void ccc::setf(const string& fristn) {
		mfirsN = fristn;
	};
	const string& ccc::getf() const { return mfirsN; };

	void ccc::setl(const string& lastn) {
		mlastN = lastn;
	};
	const string& ccc::getl() const { return mlastN; };

	void ccc::setemp(int empn) {
		mempN = empn;
	};
	int ccc::getemp() const { return mempN; };

	void ccc::setsal(int empn) {
		msalN = empn;
	};
	int ccc::getsal() const { return msalN; };

	bool ccc::getlshired() const { return mhired; };


}