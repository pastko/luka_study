#pragma once
#include <vector>
#include <stdexcept>
#include "cc.h"



namespace tts {
	const int empnumB = 1000;

	class DA {
	public:
		DA();
		ccs::ccc& addemp(const string& frisn,const string& lastn);
		ccs::ccc& getemp(int empnum);
		ccs::ccc& getemp(const string& frisn, const string& lastn);


		void displayall() const;
		void displaycur() const;
		void displayfor() const;
	private:
		vector<ccs::ccc> cccs;
		int nextempN;

	};

}