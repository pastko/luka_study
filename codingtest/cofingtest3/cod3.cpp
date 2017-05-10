#include <iostream>
#include <vector>
#include <list>
#include <stack>
#include <set>

using namespace std;

typedef struct Point {
private:
	int x;
	int y;
public:
	Point(int x1, int y1) : x(x1), y(y1) {};
	Point() : x(0), y(0) {};
	int gx() { 
		return x;
	}
	void sx(int x1) { 
		x = x1;
	}
	int gy() {
		return y;
	}
	void sy(int y1) {
		y = y1;
	}
}P;

class MAPG {
public:
	MAPG(int x, int y) : width(x), height(y), Rectcount(0), Closcount(0) {
		draw = new char*[width];
		for (int i = 0; i < width; i++)
		{
			draw[i] = new char[height];
			memset(draw[i], 0, sizeof(char)*height);
		}
		checkpoint = new int[x*y];
		memset(checkpoint, 0, sizeof(int)*x*y);
	}
	MAPG() {}
	~MAPG() {
		for (int i = 0; i < width; i++)
		{
			free(draw[i]);
		}free(draw);
		free(checkpoint);
	}

	void setDraw()
	{
		for (int i = 0; i < width; i++) {
			cin >>draw[i];
		}
	}

	void find_closed()
	{
		stack<P> st;
		int wx, wy;
		for (int i = 0; i < width; i++)
		{
			for (int j = 0; j < height; j++)
			{
				if (draw[i][j] == '0' && checkpoint[width*i + j] != 1)
				{
					st.push(P(i, j));
					checkpoint[width*i + j] = 1;
					vector<P> vt;
					while (!st.empty())
					{
						wx = st.top().gx();
						wy = st.top().gy();
						vt.push_back(P(wx, wy));
						st.pop();

						for (int a = wx; a < width && a == wx + 1; a++)
						{
							for (int b = wy; b < height && b == wy + 1; b++)
							{
								if (draw[a][b] == '0' && checkpoint[width*a + b] != 1)
								{
									st.push(P(a, b));
									checkpoint[width*a + b] = 1;
								}
							}
						}
					}VT.push_back(vt);
				}
			}
		}
	}

	int find_rect()
	{
	
		int x1, y1, x2, y2 , i=0;
		int tmp = 0, sum =0;
		int count = 0;
		for (vector<vector<P>>::iterator v = VT.begin(); v != VT.end() ; v++)
		{
			int max = 0;
			for (auto val : (*v)) {
				if (tmp == max) {
					max = 5 * (val.gx()+1) + val.gy();
					x1 = val.gx();
					y1 = val.gy();
				}
				else {
					tmp = 5 * (val.gx() + 1) + val.gy();
					if (tmp > max)
					{
						max = tmp;
						x1 = val.gx();
						y1 = val.gy();
					}
				}
			}tmp = 0;


			int min = 0;
			for (auto val : (*v)) {
				if (tmp == min) {
					min = 5 * (val.gx() + 1) + val.gy();
					x2 = val.gx();
					y2 = val.gy();
				}
				else {
					tmp = 5 * (val.gx() + 1) + val.gy();
					if (tmp < min)
					{
						min = tmp;
						x2 = val.gx();
						y2 = val.gy();
					}
				}
			}
			sum = (x1 - x2 + 1) * (y1 - y2 + 1);
			if (sum == (*v).size())
			{
				count++;
			}
		}
		return count;
	}

	void setCountVal()
	{
		find_closed();
		Closcount = VT.size();
		Rectcount = find_rect();
	}

	void Display(int i)
	{
		switch (i)
		{
		case 1:
			cout << Closcount << endl;
			break;
		case 2:
			cout << Rectcount << endl;
			break;
		default:
			break;
		}
	}

	////////// geter, seter //////////
	const int getWidth() {
		return width;
	}
	const int getHeight() {
		return height;
	}
	const int getRectC() {
		return Rectcount;
	}
	void setRectC(int rec) {
		Rectcount = rec;
	}
	const int getClosC() {
		return Closcount;
	}
	void setClosC(int clo) {
		Closcount = clo;
	}
	//////////////////////////////////
	
private:
	int width, height;
	int Rectcount;
	int Closcount;
	char **draw;
	int *checkpoint;
	vector<vector<P>> VT;
};




int main()
{
	int x, y , k;
	cin >> x >> y;
	MAPG mp(x, y);
	mp.setDraw();
	mp.setCountVal();
	cin >> k;
	mp.Display(k);

	return 0;
}


