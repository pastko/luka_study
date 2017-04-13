#pragma once
#ifndef _DA_h_
#define _DA_H_
#include <vector>
#include <stdexcept>
#include "cc.h"
#endif // !_DA_H_


namespace ccs {
	const int empnumB = 1000;

	class DA {
	public:
		DA();
		ccc& addemp(const string& frisn,const string& lastn);
		ccc& getemp(int empnum);
		ccc& getemp(const string& frisn, const string& lastn);


		void displayall() const;
		void displaycur() const;
		void displayfor() const;
	private:
		vector<ccc> cccs;
		int nextempN;

	};

}