#pragma once
#include "cc.h"
#include "da.h"
#pragma warning(disable:4996)

using namespace std;


int main()
{

		tts::DA dd;
		
		ccs::ccc& em1 = dd.addemp("kim", "sik");
		em1.fire();
		em1.demote();
		ccs::ccc& em2 = dd.addemp("test", "sik");
		em2.setsal(1);
		em2.fire();
		em2.promote();
		
		ccs::ccc& em3 = dd.addemp("wet", "sik");
		em3.setsal(2333);
		
		cout << "dis all" << endl;
		dd.displayall();
		cout << "dis cur" << endl;
		dd.displaycur();
		cout << "dis for" << endl;
		dd.displayfor();


		cout << "found" << endl;
		try {
			ccs::ccc& te = dd.getemp("wet","sik");
			te.display();
		}
		catch (const std::exception e)
		{
			cout << "Eecept : " << e.what() << endl;
		}
	
}
