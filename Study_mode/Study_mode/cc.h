#pragma once
#include <iostream>
#include <string>
using namespace std;


namespace ccs
{
	const int Dpay = 30000;

	class ccc {
	public:
		ccc();
		void promote(int raisA = 1000);
		void demote(int deraisA = 1000);
		void hire();
		void fire();
		void display() const;

		void setf(const string& fristn);
		const string& getf() const;
		
		void setl(const string& lastn);
		const string& getl() const;

		void setemp(int empn);
		int getemp() const;

		void setsal(int news);
		int getsal() const;

		bool getlshired() const;
		
	private:
		string mfirsN;
		string mlastN;
		int mempN;
		int msalN;
		bool mhired;
	};

}