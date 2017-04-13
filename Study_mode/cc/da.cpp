#include "da.h"


namespace ccs {
	DA::DA() : nextempN(empnumB) {	}
	ccc& DA::addemp(const string& frisn, const string& lastn)
	{
		ccc tcc;
		tcc.setf(frisn);
		tcc.setl(lastn);
		tcc.setemp(nextempN++);
		tcc.hire();
		cccs.push_back(tcc);
		return cccs[cccs.size() - 1];
	}

	ccc& DA::getemp(int empnum) {
		for (auto& ss : cccs)
		{
			if (ss.getemp() == empnum)
			{
				return ss;
			}
			throw std::runtime_error("not found emp");
		}
	}

	ccc& DA::getemp(const string& frisn, const string& lastn) {
		for (auto& ss : cccs)
		{
			if ((ss.getf().compare(frisn) && ss.getl().compare(lastn)) == 0)
			{
				return ss;
			}
			throw std::runtime_error("not found emp");
			
		}
	}

	void DA::displayall() const{
		for (const auto& ss : cccs)
		{
			ss.display();
		}
	}
	void DA::displaycur() const{
		for (const auto& ss : cccs)
		{
			if (ss.getlshired())
			{
				ss.display();
			}
		}
	}
	void DA::displayfor() const {
		for (const auto& ss : cccs)
		{
			if (!ss.getlshired())
			{
				ss.display();
			}
		}
	}
}
