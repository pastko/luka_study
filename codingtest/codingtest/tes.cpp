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
	bool fine; // �Ź��� ���� ( �� / �� )
};

int main()
{
	map<int, SinB> sinbal;
	SinB S;
	int x,c,w,d,t,key;
	int sum = 0;
	bool Sinstate = false;


	cout << "�޸��� �ð� �Է�" << endl;
	cin >> x;
	cout << "�Ź� ���� �Է�" << endl;
	cin >> c;
	cout << "�Ź����� �Է�" << endl;
	for (int i = 0; i < c; i++) {
		cin >> key >> w >> d >> t;
		sinbal.insert(map<int,SinB>::value_type(key, SinB(w, d, t, key)));
	}
	
	for (int i = 0; i <= x; i++)
	{
		if (Sinstate) // ���� �Ź� ������ ����
		{
			if (sinbal[i].getF()) // ���ο� �Ź� �������� ���� Ȯ��
			{
				if (sinbal[i].ToLenght() > S.ToLenght()) // ���� �Ź߰� ���ο� �Ź��� ȿ�� ���
				{
					cout << "�Ź� ��ü : (" << S.getID() << ") -> " << "(" << sinbal[i].getID() << ")" << endl;
					S = sinbal[i];
					S.setDT(S.getDT() - 1);
					sum += S.getSP();
				}
				else
				{
					cout << "�Ź� ���� : ("<< sinbal[i].getID() << ")" << endl;
					S.setDT(S.getDT() - 1);
					sum += S.getSP();
				}
			}
			else
			{
				if (S.getWT() > 0) // ���� �Ź��� ���� Ȯ�� ( ����ð��� �ð� )
				{
					S.setWT(S.getWT() - 1);
				}
				else
				{
					if (S.getDT() > 0) {
						S.setDT(S.getDT() - 1);
						sum += S.getSP();
					}
					else if (S.getDT() == 0) // ���� �Ź��� ���ӽð��� ������ ��
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
				if (sinbal[i].ToLenght() > sinbal[i].getWT())  // �Ź��� ȿ�� ���
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
	cout << "�� �̵��Ÿ� : " << sum << endl;
}