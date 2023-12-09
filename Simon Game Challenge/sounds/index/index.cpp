#include<iostream>

#include<vector>

#include<algorithm>

using namespace std;

int main()

{

int n,i,s,x=2,lcm=1,flag;

cout<<"Enter the no of values";

cin>>n;

int ar[n];

cout<<"Enter the numbers";

for(i=0;i<n;i++){

cin>>ar[i];

}

s=sizeof(ar)/sizeof(ar[0]);

while(*max_element(ar,ar+s)!=1)

{ flag=0;

for(i=0;i<n;i++)

{

if(ar[i]%x==0){

ar[i]/=x;

flag=1;

}

}

if(flag==0)

x++;

else

lcm*=x;

}

cout<<"\n the lcm is:"<<lcm;

return 0;

}