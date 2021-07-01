#include<iostream>
#include <time.h>
#include<stdlib.h>
using namespace std;
int main(){
	srand(time(0));
	for(int i=0;i<10;i++)
	{
		cout << rand() <<endl;
	}
	return 0;
}


