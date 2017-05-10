#include <iostream>
#include <cmath>
using namespace std;



int count_n(int n)
{
	int cont = 1;
	for (n; n >= 10;)
	{
		n /= 10;
		cont++;
	}
	return cont;
}

bool F(const int n)
{
	int tmp = count_n(n);
	int su = (int)pow(n, 2);
	int s = (int)pow(10, tmp);
	if (su % s == n) 
		return 1;

	return 0;
}

int problem1(int n) { 
	for (int i = n; i > 0; i--) {
		if (F(i))
		{
			return i;
		}
	}	
}

void main()
{
	int res;
	int _n;
	cin >> _n;

	res = problem1(_n);
	cout << res << endl;
}

