#include "da.h"


namespace tts {
	DA::DA() : nextempN(empnumB) {	}
	ccs::ccc& DA::addemp(const string& frisn, const string& lastn)
	{
		ccs::ccc tcc;
		tcc.setf(frisn);
		tcc.setl(lastn);
		tcc.setemp(nextempN++);
		tcc.hire();
		cccs.push_back(tcc);
		return cccs[cccs.size() - 1];
	}

	ccs::ccc& DA::getemp(int empnum) {
			for (auto& ss : cccs)
			{
				if (ss.getemp() == empnum)
				{
					return ss;
				}
			}throw std::invalid_argument("not found emp");
		
	}

	ccs::ccc& DA::getemp(const string& frisn, const string& lastn) {
		
			for (auto& ss : cccs)
			{
				if (ss.getf().compare(frisn) == 0 && ss.getl().compare(lastn) ==0)
				{
					return ss;
				}	
			}
			throw std::invalid_argument("not found emp");
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
