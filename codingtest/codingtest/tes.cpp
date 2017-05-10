#include <iostream>
#include <map>

using namespace std;

class SinB {
public:
	SinB(int w, int d, int s,int id = 0) : WT(w), DT(d), SP(s), sID(id) , fine(true){
	}
	SinB() : fine(false) {};

	//////// geter, seter ////////////
	
	const int getWT() { return WT; }
	void setWT(const int wt) { WT = wt; }
	const int getDT() { return DT; }
	void setDT(const int dt) { DT = dt; }
	
	const int getSP() { return SP; }
	const int getID() { return sID; }
	bool getF() { return fine; }

	//////////////////////////////////

	int ToLenght() const
	{
		return DT * SP;
	}	

private:

	int WT; // Wear time
	int DT; // Duration
	int SP; // Speed
	int sID;
	bool fine; // 신발의 상태 ( 유 / 무 )
};

int main()
{
	map<int, SinB> sinbal;
	SinB S;
	int x,c,w,d,t,key;
	int sum = 0;
	bool Sinstate = false;


	cout << "달리기 시간 입력" << endl;
	cin >> x;
	cout << "신발 개수 입력" << endl;
	cin >> c;
	cout << "신발정보 입력" << endl;
	for (int i = 0; i < c; i++) {
		cin >> key >> w >> d >> t;
		sinbal.insert(map<int,SinB>::value_type(key, SinB(w, d, t, key)));
	}
	
	for (int i = 0; i <= x; i++)
	{
		if (Sinstate) // 현재 신발 착용의 유무
		{
			if (sinbal[i].getF()) // 새로운 신발 아이템의 유무 확인
			{
				if (sinbal[i].ToLenght() > S.ToLenght()) // 기존 신발과 새로운 신발의 효율 계산
				{
					cout << "신발 교체 : (" << S.getID() << ") -> " << "(" << sinbal[i].getID() << ")" << endl;
					S = sinbal[i];
					S.setDT(S.getDT() - 1);
					sum += S.getSP();
				}
				else
				{
					cout << "신발 무시 : ("<< sinbal[i].getID() << ")" << endl;
					S.setDT(S.getDT() - 1);
					sum += S.getSP();
				}
			}
			else
			{
				if (S.getWT() > 0) // 기존 신발의 상태 확인 ( 착용시간의 시간 )
				{
					S.setWT(S.getWT() - 1);
				}
				else
				{
					if (S.getDT() > 0) {
						S.setDT(S.getDT() - 1);
						sum += S.getSP();
					}
					else if (S.getDT() == 0) // 기존 신발의 지속시간이 끝났을 시
					{
						sum += 1;
						Sinstate = false;
					}
				}
			}
		}
		else if (!Sinstate)  
		{
			if (sinbal[i].getF())
			{
				if (sinbal[i].ToLenght() > sinbal[i].getWT())  // 신발의 효율 계산
				{
					S = sinbal[i];
					Sinstate = true;
					S.setWT(S.getWT() - 1);
				}
			}
			else
			{
				sum += 1;
			}
		}		
	}
	cout << "총 이동거리 : " << sum << endl;
}